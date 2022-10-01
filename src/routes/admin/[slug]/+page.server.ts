import type { PageServerLoad } from "./$types";
import {db} from '$lib/db'

export const load: PageServerLoad = async ({params}) => {
    const id = Number(params.slug)
    const contactUnique = await db.contact.findMany({
        where: {
          id
        },
      })
    
    return [contactUnique]

}