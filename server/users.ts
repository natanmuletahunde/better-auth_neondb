'use server';

import {auth} from "@/lib/auth";
export const signIn = async () =>{
    try {
        await auth.api.signInEmail({
            body :{
                email:"orcdev@test.com",
                password:"password123"
            } 
        }) 
    } catch (error) {
         throw new Error('invalid email or password'); 
    }
    
}
export const signUp = async () =>{
    await auth.api.signUpEmail({
        body :{
            email:"orcdev@test.com",
            password:"password123",
            name:"Orc Dev"
        } 
    })
}
