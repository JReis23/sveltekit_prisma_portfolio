import bcrypt from 'bcrypt'
import { invalid, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'
import { db } from '$lib/db'


export const load: PageServerLoad = async ({ locals }) => {
	// redirect to `/` if logged in
	if (locals.user) {
		throw redirect(302, '/')
	}
}

export const actions: Actions = {
	default: async ({ request }) => {
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

		const userEmail = await db.user.findUnique({
			where: { email },
		})

		if (userEmail) {
			return invalid(400, { userEmail: true })
		}

		await db.user.create({
			data: {
				email,
				passwordHash: await bcrypt.hash(password, 10),
				userAuthToken: crypto.randomUUID(),
			},
		})

		throw redirect(303, '/login')
	},
}