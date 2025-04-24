import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Laptop,
  Camera,
  Headphones,
  Smartphone,
  Monitor,
} from 'lucide-react';

interface Order {
  id: string;
  date: string;
  product: 'laptop' | 'camera' | 'headphones' | 'smartphone' | 'monitor';
  customerName: string;
  email: string;
  phone: string;
  address: string;
  paymentType: 'Credit Card' | 'Pay Pal';
  status: 'Completed' | 'Processing';
}

const orders: Order[] = [
  {
    id: '#RB5625',
    date: '29 April 2024',
    product: 'laptop',
    customerName: 'Anna M. Hines',
    email: 'anna.hines@mail.com',
    phone: '(+1)-555-1564-261',
    address: 'Burr Ridge/Illinois',
    paymentType: 'Credit Card',
    status: 'Completed',
  },
  {
    id: '#RB9652',
    date: '25 April 2024',
    product: 'camera',
    customerName: 'Judith H. Fritsche',
    email: 'judith.fritsche.com',
    phone: '(+57)-305-5579-759',
    address: 'SULLIVAN/Kentucky',
    paymentType: 'Credit Card',
    status: 'Completed',
  },
  {
    id: '#RB5984',
    date: '25 April 2024',
    product: 'headphones',
    customerName: 'Peter T. Smith',
    email: 'peter.smith@mail.com',
    phone: '(+33)-655-5187-93',
    address: 'Yreka/California',
    paymentType: 'Pay Pal',
    status: 'Completed',
  },
  {
    id: '#RB3625',
    date: '21 April 2024',
    product: 'smartphone',
    customerName: 'Emmanuel J. Delcid',
    email: 'emmanuel.delicid@mail.com',
    phone: '(+30)-693-5553-637',
    address: 'Atlanta/Georgia',
    paymentType: 'Pay Pal',
    status: 'Processing',
  },
  {
    id: '#RB8652',
    date: '18 April 2024',
    product: 'monitor',
    customerName: 'William J. Cook',
    email: 'william.cook@mail.com',
    phone: '(+91)-855-5446-150',
    address: 'Rosenberg/Texas',
    paymentType: 'Credit Card',
    status: 'Processing',
  },
];

const ProductIcon = ({ product }: { product: Order['product'] }) => {
  const icons = {
    laptop: Laptop,
    camera: Camera,
    headphones: Headphones,
    smartphone: Smartphone,
    monitor: Monitor,
  };
  const Icon = icons[product];
  return <Icon className='w-6 h-6 text-gray-600' />;
};

export function RecentOrders() {
  return (
    <div className='rounded-lg shadow-sm border border-gray-100'>
      <div className='flex justify-between items-center p-6 border-b border-gray-100'>
        <h2 className='text-xl font-semibold text-gray-800'>Recent Orders</h2>
        <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors'>
          + Create Order
        </button>
      </div>

      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-gray-100'>
              <th className='text-left p-4 text-sm font-medium text-gray-600'>
                Order ID.
              </th>
              <th className='text-left p-4 text-sm font-medium text-gray-600'>
                Date
              </th>
              <th className='text-left p-4 text-sm font-medium text-gray-600'>
                Product
              </th>
              <th className='text-left p-4 text-sm font-medium text-gray-600'>
                Customer Name
              </th>
              <th className='text-left p-4 text-sm font-medium text-gray-600'>
                Email ID
              </th>
              <th className='text-left p-4 text-sm font-medium text-gray-600'>
                Phone No.
              </th>
              <th className='text-left p-4 text-sm font-medium text-gray-600'>
                Address
              </th>
              <th className='text-left p-4 text-sm font-medium text-gray-600'>
                Payment Type
              </th>
              <th className='text-left p-4 text-sm font-medium text-gray-600'>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className='border-b border-gray-100 hover:bg-gray-50'
              >
                <td className='p-4 text-sm text-blue-600 font-medium'>
                  {order.id}
                </td>
                <td className='p-4 text-sm text-gray-600'>{order.date}</td>
                <td className='p-4'>
                  <ProductIcon product={order.product} />
                </td>
                <td className='p-4 text-sm text-gray-600'>
                  {order.customerName}
                </td>
                <td className='p-4 text-sm text-gray-600'>{order.email}</td>
                <td className='p-4 text-sm text-gray-600'>{order.phone}</td>
                <td className='p-4 text-sm text-gray-600'>{order.address}</td>
                <td className='p-4 text-sm text-gray-600'>
                  {order.paymentType}
                </td>
                <td className='p-4'>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='flex items-center justify-between p-6 border-t border-gray-100'>
        <div className='text-sm text-gray-600'>Showing 5 of 90,521 orders</div>
        <div className='flex items-center gap-2'>
          <button className='p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600'>
            <ChevronLeft className='w-4 h-4' />
          </button>
          <button className='px-3 py-1 rounded-lg bg-blue-500 text-white'>
            1
          </button>
          <button className='px-3 py-1 rounded-lg hover:bg-gray-50 text-gray-600'>
            2
          </button>
          <button className='px-3 py-1 rounded-lg hover:bg-gray-50 text-gray-600'>
            3
          </button>
          <button className='p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600'>
            <ChevronRight className='w-4 h-4' />
          </button>
        </div>
      </div>
    </div>
  );
}
