'use client'

import React from 'react';
import { EllipsisVertical, Plus } from 'lucide-react';
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
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

// Brand type definition
interface Brand {
  id: number;
  name: string;
  country: string;
  category: string;
  established: string;
  stores: number;
  products: number;
  status: 'Active' | 'Inactive';
  logo: string;
}

const brandData: Brand[] = [
  {
    id: 1,
    name: 'Zaroan',
    country: 'Brazil',
    category: 'Clothing',
    established: 'Since 2020',
    stores: 1500,
    products: 8950,
    status: 'Active',
    logo: '/lovable-uploads/81dfe3b9-9272-4482-a5c8-3e458b8fce70.png',
  },
  {
    id: 2,
    name: 'Jocky-Johns',
    country: 'USA',
    category: 'Clothing',
    established: 'Since 1985',
    stores: 205,
    products: 1258,
    status: 'Active',
    logo: '/lovable-uploads/81dfe3b9-9272-4482-a5c8-3e458b8fce70.png',
  },
  {
    id: 3,
    name: 'Ginne',
    country: 'India',
    category: 'Lifestyle',
    established: 'Since 2001',
    stores: 89,
    products: 338,
    status: 'Active',
    logo: '/lovable-uploads/81dfe3b9-9272-4482-a5c8-3e458b8fce70.png',
  },
  {
    id: 4,
    name: 'DDoen',
    country: 'Brazil',
    category: 'Fashion',
    established: 'Since 1995',
    stores: 650,
    products: 6842,
    status: 'Active',
    logo: '/lovable-uploads/81dfe3b9-9272-4482-a5c8-3e458b8fce70.png',
  },
  {
    id: 5,
    name: 'Zoddiak',
    country: 'Canada',
    category: 'Manufacturing',
    established: 'Since 1963',
    stores: 109,
    products: 952,
    status: 'Active',
    logo: '/lovable-uploads/81dfe3b9-9272-4482-a5c8-3e458b8fce70.png',
  },
];

const BrandListing = () => {
  // Calculate total and active brands
  const totalBrands = 102;
  const activeBrands = 69;

  // Handle Add Brand
  const handleAddBrand = () => {
    console.log('Adding new brand...');
    // Implement add brand functionality here
  };

  // Handle Brand Options
  const handleBrandOptions = (brandId: number) => {
    console.log('Opening options for brand', brandId);
    // Implement brand options functionality here
  };

  // Format number for display (e.g., 1500 to 1.5k)
  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <Card className='w-full shadow-sm border border-gray-100'>
      <CardHeader className='flex flex-row items-center justify-between pb-2 pt-6 px-6'>
        <CardTitle className='text-xl font-medium text-gray-900'>
          Brands Listing
        </CardTitle>
        <Button
          variant='outline'
          size='sm'
          className='bg-gray-50 hover:bg-gray-100 text-gray-900 border-gray-200'
          onClick={handleAddBrand}
        >
          Add Brand <Plus className='h-4 w-4 ml-1' />
        </Button>
      </CardHeader>
      <CardContent className='px-6 pb-0'>
        <div className='mb-4 text-gray-600'>
          {activeBrands} Active brands out of {totalBrands}
        </div>

        <div className='overflow-x-auto'>
          <Table>
            <TableHeader>
              <TableRow className='hover:bg-transparent'>
                <TableHead className='w-[80px]'></TableHead>
                <TableHead className='font-medium text-gray-500'>
                  Category
                </TableHead>
                <TableHead className='font-medium text-gray-500'>
                  Established
                </TableHead>
                <TableHead className='font-medium text-gray-500'>
                  Stores
                </TableHead>
                <TableHead className='font-medium text-gray-500'>
                  Products
                </TableHead>
                <TableHead className='font-medium text-gray-500'>
                  Status
                </TableHead>
                <TableHead className='w-[40px]'></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {brandData.map((brand) => (
                <TableRow key={brand.id} className='hover:bg-gray-50'>
                  <TableCell className='py-4'>
                    <div className='flex items-center justify-center h-10 w-10 rounded-full overflow-hidden bg-blue-100'>
                      <Image
                      width={100}
                      height={100}
                        src={brand.logo}
                        alt={brand.name}
                        className='h-10 w-10 object-cover'
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className='font-medium'>
                      {brand.name} - {brand.country}
                    </div>
                    <div className='text-sm text-gray-500'>
                      {brand.category}
                    </div>
                  </TableCell>
                  <TableCell className='text-gray-600'>
                    {brand.established}
                  </TableCell>
                  <TableCell className='text-gray-600'>
                    {formatNumber(brand.stores)}
                  </TableCell>
                  <TableCell className='text-gray-600'>
                    {formatNumber(brand.products)}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant='outline'
                      className={`
                        rounded-full px-3 flex items-center gap-1.5 w-fit
                        ${
                          brand.status === 'Active'
                            ? 'text-green-600 border-green-200 bg-green-50'
                            : 'text-gray-600 border-gray-200 bg-gray-50'
                        }
                      `}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          brand.status === 'Active'
                            ? 'bg-green-500'
                            : 'bg-gray-400'
                        }`}
                      ></span>
                      {brand.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant='ghost'
                      size='icon'
                      className='h-8 w-8 text-gray-500 hover:bg-gray-100'
                      onClick={() => handleBrandOptions(brand.id)}
                    >
                      <EllipsisVertical className='h-4 w-4' />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className='flex items-center justify-between px-2 py-4 border-t border-gray-100 mt-2'>
          <div className='text-sm text-gray-500'>Showing 5 of 15 Results</div>
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
                <PaginationLink href='#'>3</PaginationLink>
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

export default BrandListing;
