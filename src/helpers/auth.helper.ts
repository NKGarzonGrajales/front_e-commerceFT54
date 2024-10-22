import { ILoginProps, IRegisterProps } from "@/types";
import { Toast } from "@/helpers/index";

const APIURL = process.env.NEXT_PUBLIC_API_URL; 


export async function register(userData: IRegisterProps) {
    try {
        const res = await fetch(`${APIURL}/users/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(res.ok) {
            return res.json();
        } else {
            Toast.fire({
                icon: "error",
                iconColor: "red",
                title: "Could not complete registration",
            }); 
        }
    } catch (error: any) {
        Toast.fire({
            icon: "error",
            iconColor: "rose",
            title: "Could not complete registration",
        }); 
        throw new Error(error)
        
    }
}; 


export async function login(userData: ILoginProps) {
    try {
        const res = await fetch(`${APIURL}/users/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(res.ok) {
            return res.json();
        } else {
            Toast.fire({
                icon: "error",
                iconColor: "red",
                title: "Unable to sign in",
            }); 
        }
    } catch (error: any) {
        Toast.fire({
            icon: "error",
            iconColor: "rose",
            title: "Unable to sign in",
        }); 
        throw new Error(error)
        
    }
}; 
