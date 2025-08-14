'use server';

import {auth} from "@/lib/auth";
export const signIn = async (email:string,password:string) =>{
    try {
        await auth.api.signInEmail({
            body :{
                email,
                password
            } 
        }) 
        return{
            success: true,
            message: "User signed in successfully"
        }
    } catch (error) {
        const e = error as Error;
        return {
            success: false,
            message: e.message || "An error occurred during sign in"
        }
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
