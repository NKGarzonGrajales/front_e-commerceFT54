import { IUserSession } from '@/types';
import CartView from '@/views/CartView/CartView';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const Cart = () => { 
  const cookieStore = cookies();
  const userDataString = cookieStore.get("userData")?.value;

  if (!userDataString) {
    return redirect('/login'); 
  }
  
  let userData: IUserSession;
    try {
      userData = JSON.parse(userDataString); 
     } catch (error) {
     console.error('Failed to parse userData:', error);
     return redirect('/login');
  }

  const token = userData?.token; 
    if (typeof token !== 'string' || !token) {
      return redirect("/login")
  }


  return (
    <CartView token={token} userData={userData} />
  );
};

export default Cart;

