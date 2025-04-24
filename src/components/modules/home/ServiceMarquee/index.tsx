'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';
import {
  Truck,
  CreditCard,
  HandCoins,
  ShieldCheck,
  MessageSquareHeart,
  MessageCirclePlus,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

const services: Service[] = [
  {
    id: '1',
    icon: <Truck className='h-6 w-6' />,
    title: 'Fast Delivery',
    description: 'Get medicines delivered within 24 hours',
    bgColor: 'bg-purple-100',
  },
  {
    id: '2',
    icon: <CreditCard className='h-6 w-6' />,
    title: 'Secure Payment',
    description: '100% safe and encrypted transactions',
    bgColor: 'bg-blue-100',
  },
  {
    id: '3',
    icon: <HandCoins className='h-6 w-6' />,
    title: 'Easy Returns',
    description: 'Return within 7 days if sealed',
    bgColor: 'bg-yellow-100',
  },
  {
    id: '4',
    icon: <MessageSquareHeart className='h-6 w-6' />,
    title: 'Doctor Support',
    description: 'Consult licensed doctors 24/7',
    bgColor: 'bg-purple-100',
  },
  {
    id: '5',
    icon: <ShieldCheck className='h-6 w-6' />,
    title: 'Authentic Medicines',
    description: '100% verified and trusted brands',
    bgColor: 'bg-red-100',
  },
  {
    id: '6',
    icon: <MessageCirclePlus className='h-6 w-6' />,
    title: '24/7 Customer Care',
    description: 'Help & support whenever you need',
    bgColor: 'bg-sky-100',
  },
  {
    id: '7',
    icon: <ShieldCheck className='h-6 w-6' />,
    title: 'Health Reminders',
    description: 'Get pill reminders & health tips daily',
    bgColor: 'bg-gray-100',
  },
];

const ServiceMarquee: React.FC = () => {
  return (
    <div className='w-full bg-green-100 py-4 overflow-hidden'>
      <Marquee
        pauseOnHover={true}
        gradient={false}
        speed={100}
        className='w-full'
      >
        <div className='flex items-center gap-x-17 px-4'>
          {services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

interface ServiceItemProps {
  service: Service;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
  return (
    <div className='flex items-center flex-shrink-0 gap-3 min-w-max group cursor-pointer'>
      <div className='p-1 bg-white rounded-full'>
        <div
          className={cn(
            'p-3 rounded-full transition-all duration-1000',
            service.bgColor,
            'group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:text-white'
          )}
        >
          <div className='transition-all duration-500 group-hover:text-white group-hover:animate-spin group-hover:duration-[800ms]'>
            {service.icon}
          </div>
        </div>
      </div>

      <div className='flex flex-col'>
        <h3 className='font-medium text-sm md:text-base group-hover:underline transition-all duration-300 text-gray-700'>
          {service.title}
        </h3>
        <p className='text-xs md:text-sm text-gray-500'>
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceMarquee;
