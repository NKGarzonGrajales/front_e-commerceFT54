'use client'
import { Toast } from '@/helpers'
import { register } from '@/helpers/auth.helper'
import { validateRegisterForm} from '@/helpers/validate'
import { IRegisterProps, TRegisterErrors } from '@/types'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const RegisterView = () => {
    const router = useRouter()
    const initialState = {
        email: "",
        password: "",
        name: "", 
        address: "",
        phone: ""
    }

    const [dataUser, setDataUser] = useState<IRegisterProps>(initialState)
    const [errors, setErrors] = useState<TRegisterErrors>(initialState)

    const handelSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        await register(dataUser);
        Toast.fire({
            icon: "success",
            iconColor: "green",
            title: "user registered successfully"
        })
        router.push("/login")
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value } = event.target;
        setDataUser({
            ...dataUser,
            [name]: value
        })
    }

    useEffect (() => {
        const errors = validateRegisterForm(dataUser)
        setErrors(errors)
    }, [dataUser])


  return (
    <div className='flex flex-col text-center mt-40 text-3xl'>
        <h1  className='mb-5'>Register into NidZone3 online store</h1>

        <form onSubmit={handelSubmit}>

            <div className='mb-5'>
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

            <div className='mb-5'>
                <label htmlFor='password'>Password:</label>
                <input 
                    id="password"
                    type='password'
                    name='password'
                    value={dataUser.password}
                    placeholder="A123b45"
                    onChange={handleChange}
                />
                {errors.password && <span>{errors.password}</span>}
            </div>

            <div className='mb-5'>
                <label htmlFor='name'>Name:</label>
                <input 
                    id="name"
                    type='text'
                    name='name'
                    value={dataUser.name}
                    placeholder="Adele Thor"
                    onChange={handleChange}
                />
                {errors.name && <span>{errors.name}</span>}
            </div>

            <div className='mb-5'>
                <label htmlFor='address'>Address:</label>
                <input 
                    id="address"
                    type='text'
                    name='address'
                    value={dataUser.address}
                    placeholder="Town, Country"
                    onChange={handleChange}
                />
                {errors.address && <span>{errors.address}</span>}
            </div>

            <div className='mb-5'>
                <label htmlFor='phone'>Phone:</label>
                <input 
                    id="phone"
                    type='text'
                    name='phone'
                    value={dataUser.phone}
                    placeholder="571234567"
                    onChange={handleChange}
                />
                {errors.phone && <span>{errors.phone}</span>}
            </div>

            <button type='submit' className='bg-rose-200'>Register</button>
        </form>
    </div>
  )
}

export default RegisterView
