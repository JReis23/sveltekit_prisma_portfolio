import type { PageServerLoad, Actions } from "./$types";
import {db} from '$lib/db'

export const load: PageServerLoad = async () => {
    const contact = await db.contact.findMany()
    return [contact]
}

export const actions: Actions = {
    default: async ({request}) => {
		    const data = await request.formData()
        const id = Number(data.get('id'))

        await db.contact.delete({
            where: {
              id
            },
          })
    }
}