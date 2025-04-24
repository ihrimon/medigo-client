import React from 'react';
import { Users, Award, UserCheck, Wallet, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface StatCardProps {
  title: string;
  value: string;
  change: {
    value: string;
    isPositive: boolean;
  };
  timeframe: string;
  icon: React.ReactNode;
  gradientClass: string;
}

const StatCard = ({
  title,
  value,
  change,
  timeframe,
  icon,
  gradientClass,
}: StatCardProps) => {
  return (
    <Card className='flex flex-col justify-between border border-gray-100 shadow-sm hover-lift transition-all-fast'>
      <div className='px-5 py-4'>
        <div className='flex items-center justify-between mb-1'>
          <h3 className='text-gray-700 text-sm font-medium'>{title}</h3>
          <div
            className={`${gradientClass} text-white p-2 rounded-full h-10 w-10 flex items-center justify-center shadow-md`}
          >
            {icon}
          </div>
        </div>
        <p className='text-2xl font-semibold mb-3'>{value}</p>
        <div className='flex items-center text-sm'>
          <span
            className={`flex items-center font-medium ${
              change.isPositive ? 'text-green-600' : 'text-red-500'
            }`}
          >
            <span className='mr-1'>{change.isPositive ? '▲' : '▼'}</span>
            {change.value}
          </span>
          <span className='ml-1 text-gray-600'>{timeframe}</span>
        </div>
      </div>
    </Card>
  );
};

const CurrentStats = () => {
  const statCards: StatCardProps[] = [
    {
      title: 'Total Users',
      value: '20,000',
      change: {
        value: '+4000',
        isPositive: true,
      },
      timeframe: 'Last 30 days users',
      icon: <Users className='h-5 w-5' />,
      gradientClass: 'bg-gradient-to-r from-blue-500 to-blue-400',
    },
    {
      title: 'Total Subscription',
      value: '15,000',
      change: {
        value: '-800',
        isPositive: false,
      },
      timeframe: 'Last 30 days subscription',
      icon: <Award className='h-5 w-5' />,
      gradientClass: 'bg-gradient-to-r from-purple-600 to-purple-400',
    },
    {
      title: 'Total Free Users',
      value: '5,000',
      change: {
        value: '+200',
        isPositive: true,
      },
      timeframe: 'Last 30 days users',
      icon: <UserCheck className='h-5 w-5' />,
      gradientClass: 'bg-gradient-to-r from-blue-600 to-blue-400',
    },
    {
      title: 'Total Income',
      value: '$42,000',
      change: {
        value: '+$20,000',
        isPositive: true,
      },
      timeframe: 'Last 30 days income',
      icon: <Wallet className='h-5 w-5' />,
      gradientClass: 'bg-gradient-to-r from-green-600 to-green-400',
    },
    {
      title: 'Total Expense',
      value: '$30,000',
      change: {
        value: '+$5,000',
        isPositive: true,
      },
      timeframe: 'Last 30 days expense',
      icon: <FileText className='h-5 w-5' />,
      gradientClass: 'bg-gradient-to-r from-red-600 to-red-400',
    },
  ];

  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
        {statCards.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default CurrentStats;
