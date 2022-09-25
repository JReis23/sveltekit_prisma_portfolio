import {db} from '$lib/db'

export const clear:any = async (id: number) => {
    const deleteContact = await db.contact.delete({
        where: {
            id
        }
    });

    return deleteContact;
};