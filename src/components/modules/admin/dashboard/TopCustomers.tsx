import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Customer {
  id: string;
  name: string;
  orders: number;
  image: string;
}

const customers: Customer[] = [
  {
    id: '017★★★★★58',
    name: 'Dianne Russell',
    orders: 30,
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: '017★★★★★58',
    name: 'Wade Warren',
    orders: 30,
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: '017★★★★★58',
    name: 'Albert Flores',
    orders: 35,
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: '017★★★★★58',
    name: 'Bessie Cooper',
    orders: 20,
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: '017★★★★★58',
    name: 'Arlene McCoy',
    orders: 25,
    image:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: '017★★★★★58',
    name: 'John Doe',
    orders: 32,
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
];

export function TopCustomers() {
  return (
    <div className='rounded-lg shadow-sm p-6 border-gray-100 border'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-gray-800'>Top Customers</h2>
        <button className='text-blue-500 hover:text-blue-600 flex items-center gap-1 text-sm font-medium'>
          View All
          <ChevronRight className='w-4 h-4' />
        </button>
      </div>

      <div className='space-y-4'>
        {customers.map((customer) => (
          <div
            key={customer.name}
            className='flex items-center justify-between'
          >
            <div className='flex items-center gap-3'>
              <Image
                width={120}
                height={120}
                src={customer.image}
                alt={customer.name}
                className='w-10 h-10 rounded-full object-cover'
              />
              <div>
                <div className='font-medium text-gray-900'>{customer.name}</div>
                <div className='text-sm text-gray-500'>{customer.id}</div>
              </div>
            </div>
            <div className='text-gray-700'>
              Orders: <span className='font-medium'>{customer.orders}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
