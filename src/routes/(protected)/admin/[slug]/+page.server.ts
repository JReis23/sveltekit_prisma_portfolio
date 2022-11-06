import sgMail, { type MailDataRequired } from '@sendgrid/mail';
import type { PageServerLoad, Actions } from './$types';
import { env as private_env } from '$env/dynamic/private';
import { db } from '$lib/db';
import { invalid } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export let showResponse: boolean;

export const load: PageServerLoad = async ({ params, locals }) => {
	if (!locals.user) {
		throw redirect(302, '/login');
	} else {
		try {
			const id = Number(params.slug);
			const contactUnique = await db.contact.findUnique({
				where: {
					id
				}
			});
			return contactUnique;
		} catch (error) {
			console.error('', error);
		}
	}
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const to = data.get('to');
		const subject = data.get('subject');
		// const text = data.get('text');
		const html = data.get('html');
		if (typeof to !== 'string' || !to) {
			return invalid(400, { invalidTo: true });
		}
		if (typeof subject !== 'string' || !subject) {
			return invalid(400, { invalidSubject: true });
		}
		// if(
		//   typeof text !== 'string' ||
		//   !text
		// ) {
		//   return invalid(400, {invalidText: true})
		// }
		if (typeof html !== 'string' || !html) {
			return invalid(400, { invalidHtml: true });
		}

		sgMail.setApiKey(private_env.SENDGRID_API_KEY);
		const msg: MailDataRequired = {
			to,
			from: 'cjfreis23@gmail.com',
			subject,
			// text,
			html
		};
		sgMail
			.send(msg)
			.then(() => {
				console.log('Email sent');
				showResponse = false;
			})
			.catch((error) => {
				console.error(error);
			});
	}
};
