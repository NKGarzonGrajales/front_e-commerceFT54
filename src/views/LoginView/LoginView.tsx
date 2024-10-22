'use client'
import { login } from '@/helpers/auth.helper'
import { validateLoginForm } from '@/helpers/validate'
import { ILoginErrors, ILoginProps } from '@/types'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { Toast } from '@/helpers'
import { useRouter } from 'next/navigation'



const LoginView = () => {
    const router = useRouter();
    const initialState = {
        email: "",
        password: ""
    }

    const [dataUser, setDataUser] = useState<ILoginProps>(initialState);
    const [errors, setErrors] = useState<ILoginErrors>(initialState);
    const [visible, setVisible] = useState(false);
       

    const handelSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
          const response = await login(dataUser);
          const { token, user } = response; 
          Cookies.set('userData', JSON.stringify({ token, user }), { expires: 1 });
          Toast.fire({
            icon: "success",
            iconColor: "green",
            title: "login successful"
        })
        router.push("/")
    }      
      
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value } = event.target;
        setDataUser({
            ...dataUser,
            [name]: value
        })
    }

    useEffect (() => {
        const errors = validateLoginForm(dataUser)
        setErrors(errors)
    }, [dataUser])


  return (
    <div className='flex flex-col text-center mt-40 text-3xl'>
        <h1 className='mb-5'>Sing up at NidZone3 online store</h1>

        <form onSubmit={handelSubmit}>

            <div className='mb-5 mt-5'>
                <label htmlFor='email_address'>Email:</label>
                <input 
                    id="email_address"
                    type='email'
                    name='email'
                    value={dataUser.email}
                    placeholder="emailname@example.com"
                    onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
            </div>

            <div className='flex flex-col gap-2 mb-5'>
                <label htmlFor='password'>Password:</label>
                <div>
                <input 
                    id="password"
                    type={`${visible ? "password" : "text"}`}
                    name='password'
                    value={dataUser.password}
                    placeholder="********"
                    onChange={handleChange}
                />
                <button onClick={() => setVisible(!visible)}>👁️</button>
                </div>

                {errors.password && <span className='text-red-950'>{errors.password}</span>}
            </div>

            <button type='submit'>Sign In</button>
        </form>
    </div>
  )
}

export default LoginView
