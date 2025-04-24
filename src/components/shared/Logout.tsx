/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { protectedRoutes } from '@/constants/protectedRoutes';
import { useUser } from '@/context/UserContext';
import { logout } from '@/services/auth';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const Logout = () => {
      const { user, setIsLoading } = useUser();
      const router = useRouter();
      const pathname = usePathname();

      const handleLogout = () => {
        logout();
        setIsLoading(true);

        if (protectedRoutes.some((route) => pathname.match(route))) {
          router.push('/');
        }
      };
  return (
    <button onClick={() => handleLogout()}>
      Log out
    </button>
  );
}

export default Logout