'use client'
import { IUserSession } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const NavbarButtons: React.FC<{userData: IUserSession}> = ({userData}) => {
  
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [userSession, setUserSession] = useState<IUserSession>(userData);
    const pathname = usePathname();

    useEffect (() => {
        if(userData.token) {
            setUserSession(userData)
        }

    }, [pathname, userData, userData.token])

  return (
    <div className="flex space-x-6 text-white font-sans text-xl font-semibold ml-5 mr-5">
        {!userData.token ? (
          <>
            <Link href="/register">
              <button className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 hover:text-red-950 text-white font-bold py-2 px-4 rounded-2xl border-r-5 transition duration-300 ease-in-out">
                Sign Up
              </button>
            </Link>
            <Link href="/login">
              <button className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 hover:text-red-950 text-white font-extrabold py-2 px-4 rounded-2xl border-r-5 transition duration-300 ease-in-out">
                Log In
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link href="/cart">
              <button className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 hover:text-red-950 text-white font-bold py-2 px-4 rounded-2xl border-r-5 transition duration-300 ease-in-out">
                Cart
              </button>
            </Link>
            <Link href="/dashboard">
              <button className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 hover:text-red-950 text-white font-extrabold py-2 px-4 rounded-2xl border-r-5 transition duration-300 ease-in-out">
                Profile
              </button>
            </Link>
          </>
        )}
      </div>
  )
}

export default NavbarButtons;