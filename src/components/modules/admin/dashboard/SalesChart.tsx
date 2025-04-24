'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ShoppingBag, Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

import { cn } from '@/lib/utils';

// Sample data
const generateMockData = (month: string) => {
  const daysInMonth = month === 'February' ? 28 : 30;
  const data = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    return {
      day: `${day < 10 ? '0' : ''}${day} ${month}`,
      Sales: 59 + Math.random() * 12,
      Order: 72 + Math.random() * 8,
    };
  });

  return data;
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const SalesChart = () => {
  const [selectedMonth, setSelectedMonth] = useState('May');
  const [isHovered, setIsHovered] = useState(false);
  const [data, setData] = useState(generateMockData(selectedMonth));

  // Calculate total sales
  const totalSales = data.reduce((sum, item) => sum + item.Sales, 0).toFixed(2);
  const formattedTotalSales = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(parseFloat(totalSales));

  // Calculate percentage increase (mock data)
  const percentageIncrease = 8.3;

  const handleMonthChange = (value: string) => {
    setSelectedMonth(value);
    // Generate new data for the selected month
    setData(generateMockData(value));
  };

  return (
    <div className='w-full transition-all duration-300 ease-in-out border border-gray-100'>
      <Card className='w-full overflow-hidden border border-border/50 shadow-sm transition-all duration-300'>
        <CardHeader className='px-6 py-4 flex flex-row justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <CardTitle className='text-lg font-medium'>Sales Chart</CardTitle>
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className='text-muted-foreground hover:text-foreground transition-colors'>
                    <Info size={16} className='text-neutral-400' />
                  </button>
                </TooltipTrigger>
                <TooltipContent side='right' className=' p-3 text-sm shadow-lg'>
                  <p>Sales performance over time</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <button className='text-muted-foreground hover:text-foreground transition-colors'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z'
                fill='currentColor'
                fillRule='evenodd'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </CardHeader>

        <CardContent className='px-6 pb-6'>
          <div className='flex flex-col space-y-8'>
            <div className='flex items-center justify-between'>
              <div className='flex items-start space-x-4'>
                <div className='bg-green-50 p-3 rounded-md'>
                  <ShoppingBag className='h-6 w-6 text-green-500' />
                </div>
                <div className='space-y-1'>
                  <div className='flex items-baseline space-x-2'>
                    <h2 className='text-3xl font-semibold tracking-tight'>
                      ${formattedTotalSales}
                    </h2>
                    <span className='text-sm font-medium text-green-500 flex items-center'>
                      ↑ {percentageIncrease.toFixed(2)}%
                    </span>
                  </div>
                </div>
              </div>

              <div className='min-w-32'>
                <Select value={selectedMonth} onValueChange={handleMonthChange}>
                  <SelectTrigger className='w-full border border-input '>
                    <SelectValue placeholder='Select Month' />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month) => (
                      <SelectItem key={month} value={month}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className='h-80 w-full pt-4'>
              <ResponsiveContainer width='100%' height='100%'>
                <LineChart
                  data={data}
                  margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <CartesianGrid
                    strokeDasharray='3 3'
                    vertical={false}
                    stroke='#f3f3f3'
                  />
                  <XAxis
                    dataKey='day'
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#999' }}
                    tickMargin={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#999' }}
                    domain={['dataMin - 5', 'dataMax + 5']}
                  />
                  <Line
                    type='monotone'
                    dataKey='Sales'
                    stroke='#FE8D6F'
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 6, fill: '#FE8D6F', strokeWidth: 0 }}
                    animationDuration={1500}
                    className={cn(
                      isHovered ? 'opacity-100' : 'opacity-90',
                      'transition-opacity duration-300'
                    )}
                  />
                  <Line
                    type='monotone'
                    dataKey='Order'
                    stroke='#20C997'
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 6, fill: '#20C997', strokeWidth: 0 }}
                    animationDuration={1500}
                    className={cn(
                      isHovered ? 'opacity-100' : 'opacity-90',
                      'transition-opacity duration-300'
                    )}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className='flex items-center justify-center space-x-8'>
              <div className='flex items-center space-x-2'>
                <span className='h-3 w-3 rounded-full bg-[#FE8D6F]'></span>
                <span className='text-sm text-neutral-600'>Sales</span>
              </div>
              <div className='flex items-center space-x-2'>
                <span className='h-3 w-3 rounded-full bg-[#20C997]'></span>
                <span className='text-sm text-neutral-600'>Order</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesChart;
