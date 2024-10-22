import ProfileView from '@/views/ProfileView/ProfileView';
import { cookies } from 'next/headers'; 
import { redirect } from 'next/navigation';
import React from 'react';
import { IUserSession } from '@/types'; 


const Dashboard = () => {
  const cookieStore = cookies();  
  const userDataString = cookieStore.get('userData')?.value;

 if (!userDataString) {
    return redirect('/login');
  }

  let userData: IUserSession;
  try {
    userData = JSON.parse(userDataString);  
  } catch (error) {
    console.error('Error parsing userData:', error);
    return redirect('/login'); 
  }

  const token = userData?.token;
   if (typeof token !== 'string' || !token) {
    return redirect('/login');
  }

  return <ProfileView />;
};

export default Dashboard;

