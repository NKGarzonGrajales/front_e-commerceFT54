"use client"; 

import { IUserSession } from '@/types';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const ProfileView = () => {
  const [userData, setUserData] = useState<IUserSession | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const cookieValue = Cookies.get('userData');

    if (cookieValue) {
      setUserData(JSON.parse(cookieValue) as IUserSession);
    } else {
      router.push('/login');
    }

    setLoading(false); 
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return null; 
  }

  return (
    <div>
      <h1>Your User Profile</h1>
      <h2>Your name: {userData.user.name}</h2>
      <p>Your shipping address: {userData.user.address}</p>
      <p>Your phone: {userData.user.phone}</p>
    </div>
  );
}

export default ProfileView;


