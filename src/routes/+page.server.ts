import type {Actions} from './$types'
import { invalid, redirect } from '@sveltejs/kit'
import {db} from '$lib/db'
import {PrismaClient, Prisma} from '@prisma/client'
import {
    emailValidation,
    descriptionValidation,
    nameValidation
} from '$lib/stores/formValidator';
import { PrismaClientValidationError } from '@prisma/client/runtime';



export const actions: Actions = {
    default: async({request, params}) => {

        let success: boolean = false;

        const data = await request.formData()
        const name = data.get("name")
        const email = data.get('email')
        const description = data.get('description')
        const choice = data.get('choice')

        try {
            if (
                typeof name !== 'string' ||
                !name ||
                !nameValidation(name)
            ) {
                return invalid(400, { invalidName: true})
            }
    
            if (
                typeof email !== 'string' ||
                !email ||
                !emailValidation(email)
            )      
            {
                return invalid(400, { invalidEmail: true})
            }
    
            if (
                typeof description !== 'string' ||
                !description ||
                !descriptionValidation(description)
            ) {
                return invalid(400, { invalidDescription: true})
            }
    
            if (
                typeof choice !== 'string' ||
                !choice 
            ) {
                return invalid(400, { invalidSelect: true})
            }
            
    
            const send = await db.contact.create({
                data: {
                    description,
                    email,
                    name, 
                    choice
                }
            })

        return {success: true}
            
        } catch (error) {
            if(error) {
                console.log('Something went Wrong')
            }
        }        
    }
}

