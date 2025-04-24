'use client'

import React from 'react';
import { Download, Upload } from 'lucide-react';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import Image from 'next/image';

// Product type definition
interface Product {
  id: number;
  name: string;
  date: string;
  price: number;
  quantity: number;
  image: string;
}

const productData: Product[] = [
  {
    id: 1,
    name: 'ASOS High Waist Tshirt',
    date: '07 April 2024',
    price: 79.49,
    quantity: 82,
    image:
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Marco Single Sofa',
    date: '25 March 2024',
    price: 128.5,
    quantity: 37,
    image:
      'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=2140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Smart Headphone',
    date: '17 March 2024',
    price: 39.99,
    quantity: 64,
    image:
      'https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Lightweight Jacket',
    date: '12 March 2024',
    price: 20.0,
    quantity: 184,
    image:
      'https://images.unsplash.com/photo-1576074892931-753d42b5d831?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'Marco Shoes',
    date: '05 March 2024',
    price: 28.49,
    quantity: 69,
    image:
      'https://images.unsplash.com/photo-1576073218292-976931ec70ca?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const TopSellingProducts = () => {
  // Calculate amount
  const calculateAmount = (price: number, quantity: number): number => {
    return price * quantity;
  };

  // Handle Export
  const handleExport = () => {
    console.log('Exporting data...');
    // Implement export functionality here
  };

  // Handle Import
  const handleImport = () => {
    console.log('Importing data...');
    // Implement import functionality here
  };

  return (
    <Card className='w-full shadow-sm border border-gray-100'>
      <CardHeader className='flex flex-row items-center justify-between pb-2 pt-6 px-6'>
        <CardTitle className='text-xl font-medium text-gray-900'>
          Top Selling Products
        </CardTitle>
        <div className='flex gap-2'>
          <Button
            variant='outline'
            size='sm'
            className='text-gray-600 bg-gray-50 hover:bg-gray-100 border-gray-200'
            onClick={handleImport}
          >
            <Download className='h-4 w-4 mr-1' />
            Import
          </Button>
          <Button
            variant='default'
            size='sm'
            className='bg-blue-500 hover:bg-blue-600'
            onClick={handleExport}
          >
            <Upload className='h-4 w-4 mr-1' />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent className='px-0 pb-0'>
        <Table>
          <TableHeader className='bg-gray-50'>
            <TableRow className='hover:bg-gray-50'>
              <TableHead className='w-[80px]'></TableHead>
              <TableHead className='font-medium text-gray-700'>
                Product
              </TableHead>
              <TableHead className='font-medium text-gray-700 text-right'>
                Price
              </TableHead>
              <TableHead className='font-medium text-gray-700 text-right'>
                Quantity
              </TableHead>
              <TableHead className='font-medium text-gray-700 text-right'>
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productData.map((product) => (
              <TableRow
                key={product.id}
                className='border-t border-gray-100 hover:bg-gray-50'
              >
                <TableCell className='p-4 align-middle'>
                  <div className='flex items-center justify-center h-12 w-12 bg-gray-100 rounded-md overflow-hidden'>
                    <Image
                    width={100}
                    height={100}
                      src={product.image}
                      alt={product.name}
                      className='h-8 w-8 object-contain'
                    />
                  </div>
                </TableCell>
                <TableCell className='font-medium'>
                  <div>{product.name}</div>
                  <div className='text-sm text-gray-500'>{product.date}</div>
                </TableCell>
                <TableCell className='text-right'>
                  <div className='font-medium'>${product.price.toFixed(2)}</div>
                  <div className='text-xs text-gray-500'>Price</div>
                </TableCell>
                <TableCell className='text-right'>
                  <div className='font-medium'>{product.quantity}</div>
                  <div className='text-xs text-gray-500'>Quantity</div>
                </TableCell>
                <TableCell className='text-right'>
                  <div className='font-medium'>
                    $
                    {calculateAmount(product.price, product.quantity).toFixed(
                      2
                    )}
                  </div>
                  <div className='text-xs text-gray-500'>Amount</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className='flex items-center justify-between px-6 py-4 border-t border-gray-100'>
          <div className='text-sm text-gray-500'>Showing 5 of 10 Results</div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href='#' />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#' isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href='#' />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopSellingProducts;
