import { ILoginErrors, ILoginProps } from "@/types";


export function validateLoginForm(values: ILoginProps){
    const errors: ILoginErrors = {}

    if(values.email && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)){
        errors.email= "This email is not valid"

    } else if (values.password && values.password && !/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(values.password)) {
        errors.password = "The password must be at least 6 characters long and alphanumeric.";
      }

return errors;

}

export function validateRegisterForm(values: ILoginProps){
    const errors: ILoginErrors = {}

    if(values.email && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)){
        errors.email= "This email is not valid"

    }

return errors;

}

