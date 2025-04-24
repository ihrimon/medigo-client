'use client'

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import QuickView from './QuickView';
import { IProduct } from '@/types';
import Image from 'next/image';

const CategoryCard = ({ product }: {product: IProduct}) => {
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  return (
    <>
      <Card className='overflow-hidden border-gray-200 h-full group'>
        <CardContent className='p-0'>
          <div className='relative'>
            <AspectRatio ratio={1 / 1} className='bg-gray-100'>
              <Image
                src={product.images[0]}
                alt={product.name}
                width={600}
                height={600}
                className='object-contain w-full h-full p-6'
              />
            </AspectRatio>
              <Badge className='absolute top-2 left-2 bg-black text-white font-medium'>
                Sale!
              </Badge>
            
            {/* Quick View Button */}
            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
              <Button
                variant='secondary'
                className='bg-white hover:bg-gray-100 text-black cursor-pointer'
                onClick={() => setQuickViewOpen(true)}
              >
                <Eye className='mr-2 h-4 w-4' /> Quick View
              </Button>
            </div>
          </div>

          <div className='p-4'>
            <p className='text-sm text-gray-500 uppercase mb-1'>
              {product.category}
            </p>
            <h3 className='font-medium text-lg mb-2 line-clamp-2'>
              {product.name}
            </h3>
            <div className='flex items-center gap-2'>
              {product.price ? (
                <>
                  <span className='text-lg font-semibold'>
                    ${product.price.toFixed(2)}
                  </span>
                  <span className='text-gray-400 line-through text-sm'>
                    ${product.price.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className='text-lg font-semibold'>
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <QuickView
        product={product}
        open={quickViewOpen}
        onOpenChange={setQuickViewOpen}
      />
    </>
  );
};

export default CategoryCard;
