'use client';

import * as React from 'react';
import { BookOpen, Bot, Settings2, SquareTerminal } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import logo from '../../../app/assets/logo.png';
import Link from 'next/link';
import { DashboardItems } from './DashboardItems';
import { DashboardUser } from './DashboardUser';
import { useUser } from '@/context/UserContext';

const sidebarItems = {
  adminItems: [
    {
      title: 'Dashboard',
      url: '/admin/dashboard',
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: 'Products',
      url: '/admin/products',
      icon: Bot,
    },
    {
      title: 'Categories',
      url: '/admin/categories',
      icon: Bot,
    },
    {
      title: 'Brands',
      url: '/admin/brands',
      icon: Bot,
    },
    {
      title: 'Orders',
      url: '/admin/orders',
      icon: BookOpen,
    },
    {
      title: 'Customers',
      url: '/admin/customers',
      icon: BookOpen,
    },
    {
      title: 'Reviews',
      url: '/admin/reviews',
      icon: Settings2,
    },
  ],
  customerItems: [
    {
      title: 'Dashboard',
      url: '/customer/dashboard',
      icon: Bot,
    },
    {
      title: 'My Profile',
      url: '/customer/my-profile',
      icon: Bot,
    },
    {
      title: 'Order Products',
      url: '/customer/order-products',
      icon: Bot,
    },
    {
      title: 'Payment History',
      url: '/customer/payment-history',
      icon: Bot,
    },
    {
      title: 'Settings',
      url: '/customer/settings',
      icon: BookOpen,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();

  const itemsToShow =
    user?.role === 'admin'
      ? sidebarItems.adminItems
      : sidebarItems.customerItems;

  return (
    <Sidebar collapsible='icon' {...props}>
      {/* Logo Header */}
      <SidebarHeader>
        <div className='my-6 flex flex-col items-center'>
          <Link href='/'>
            <Image
              width={60}
              height={60}
              alt='logo'
              src={logo}
              className='rounded-md'
            />
            <h3 className='text-lg font-semibold mt-2 text-center'>MediGo</h3>
          </Link>
        </div>
      </SidebarHeader>

      {/* Sidebar Menu */}
      <SidebarContent className='px-2'>
        <DashboardItems items={itemsToShow} />
      </SidebarContent>

      {/* Footer User Info */}
      <SidebarFooter className='px-2 pb-4'>
        {user && (
          <DashboardUser
            user={{
              name: user.name,
              email: user.email,
              avatar:                'https://res.cloudinary.com/do6tvtff8/image/upload/v1742644477/images.jpg.jpg',
            }}
          />
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
