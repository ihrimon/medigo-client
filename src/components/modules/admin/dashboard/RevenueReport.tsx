'use client'

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface RevenueData {
  month: string;
  earnings: number;
  expenses: number;
}

const monthlyData: RevenueData[] = [
  { month: 'Jan', earnings: 18000, expenses: 15000 },
  { month: 'Feb', earnings: 15000, expenses: 18000 },
  { month: 'Mar', earnings: 12000, expenses: 18000 },
  { month: 'Apr', earnings: 22000, expenses: 20000 },
  { month: 'May', earnings: 42000, expenses: 32000 },
  { month: 'Jun', earnings: 18000, expenses: 18000 },
  { month: 'Jul', earnings: 27000, expenses: 17000 },
  { month: 'Aug', earnings: 10000, expenses: 12000 },
  { month: 'Sep', earnings: 24000, expenses: 18000 },
  { month: 'Oct', earnings: 45000, expenses: 35000 },
  { month: 'Nov', earnings: 18000, expenses: 15000 },
  { month: 'Dec', earnings: 20000, expenses: 16000 },
];

const maxValue = Math.max(
  ...monthlyData.map((data) => Math.max(data.earnings, data.expenses))
);
const gridLines = Array.from({ length: 6 }, (_, i) =>
  Math.round((maxValue * (5 - i)) / 5)
);

export function RevenueReport() {
  const [timeframe, setTimeframe] = useState('Yearly');

  const totalEarnings = monthlyData.reduce(
    (sum, data) => sum + data.earnings,
    0
  );
  const totalExpenses = monthlyData.reduce(
    (sum, data) => sum + data.expenses,
    0
  );

  return (
    <div className='rounded-lg p-6 shadow-sm border border-gray-100'>
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-xl font-semibold text-gray-800'>Revenue Report</h2>
        <button
          className='flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50'
          onClick={() =>
            setTimeframe(timeframe === 'Yearly' ? 'Monthly' : 'Yearly')
          }
        >
          {timeframe}
          <ChevronDown className='w-4 h-4' />
        </button>
      </div>

      <div className='flex gap-8 mb-8'>
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 rounded-sm bg-blue-500'></div>
          <span className='text-sm text-gray-600'>Earning: </span>
          <span className='font-semibold'>
            ${totalEarnings.toLocaleString()}
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 rounded-sm bg-orange-400'></div>
          <span className='text-sm text-gray-600'>Expense: </span>
          <span className='font-semibold'>
            ${totalExpenses.toLocaleString()}
          </span>
        </div>
      </div>

      <div className='relative h-80'>
        {/* Grid lines */}
        <div className='absolute inset-0 flex flex-col justify-between border-l border-gray-200'>
          {gridLines.map((value, index) => (
            <div key={index} className='border-t border-gray-200 -mt-px'>
              <span className='absolute -left-10 text-xs text-gray-500'>
                {(value / 1000).toFixed(0)}k
              </span>
            </div>
          ))}
        </div>

        {/* Bars */}
        <div className='absolute inset-0 flex items-end justify-between pl-10'>
          {monthlyData.map((data, index) => (
            <div key={index} className='flex flex-col items-center gap-1 w-12'>
              <div className='w-full flex justify-center gap-1'>
                <div
                  className='w-4 bg-blue-500 rounded-sm'
                  style={{
                    height: `${(data.earnings / maxValue) * 100}%`,
                  }}
                ></div>
                <div
                  className='w-4 bg-orange-400 rounded-sm'
                  style={{
                    height: `${(data.expenses / maxValue) * 100}%`,
                  }}
                ></div>
              </div>
              <span className='text-xs text-gray-500'>{data.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
