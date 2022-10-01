import { invalid, redirect } from '@sveltejs/kit'
import bcrypt from 'bcrypt'
import type { Actions, PageServerLoad } from './$types'

import { db } from '$lib/db'

export const load: PageServerLoad = async ({ locals }) => {
	// redirect to `/` if logged in
	if (locals.user) {
		throw redirect(302, '/')
	}
}

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData()
		const email = data.get('email')
		const password = data.get('password')

		if (
			typeof email !== 'string' ||
			typeof password !== 'string' ||
			!email ||
			!password
		) {
			return invalid(400, { invalid: true })
		}

		const user = await db.user.findUnique({ where: { email } })

		if (!user) {
			return invalid(400, { credentials: true })
		}

		const userPassword = await bcrypt.compare(password, user.passwordHash)

		if (!userPassword) {
			return invalid(400, { credentials: true })
		}

		// generate new auth token to be secure
		const authenticatedUser = await db.user.update({
			where: { email: user.email },
			data: { userAuthToken: crypto.randomUUID() },
		})

		cookies.set('session', authenticatedUser.userAuthToken, {
			// send cookie for every page
			path: '/',
			// server side only cookie so you can't use `document.cookie`
			httpOnly: true,
			// only requests from same site can send cookies
			// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
			sameSite: 'strict',
			// only sent over HTTPS in production
			secure: process.env.NODE_ENV === 'production',
			// set cookie to expire after a month
			maxAge: 60 * 60 * 24 * 30,
		})
	},
}