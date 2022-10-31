import type { PageServerLoad, Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import { db } from '$lib/db';

export const load: PageServerLoad = async ({ locals }) => {
	// redirect user if not logged in
	if (!locals.user) {
		throw redirect(302, '/login');
	} else {
		try {
			const contact = await db.contact.findMany();

			return [contact];
		} catch (error) {
			console.log(error);
		}
	}
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
		const id = Number(data.get('id'));
		await db.contact.delete({
			where: {
				id
			}
		});
	}
};
