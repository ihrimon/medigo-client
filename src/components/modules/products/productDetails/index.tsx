// app/product/[id]/page.tsx
'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Heart,
  Minus,
  Plus,
  Check,
  ShoppingCart,
  ShoppingBag,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { RadioGroup } from '@/components/ui/radio-group';
import { IProduct } from '@/types';
import Image from 'next/image';
import { useAppDispatch } from '@/redux/hooks';
import { addProduct } from '@/redux/features/cartSlice';

const sizeOptions = ['100MG', '200MG', '300MG'];

const ProductDetails = ({ product }: { product: IProduct }) => {
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [quantity, setQuantity] = useState<number>(1);
  const [mainImage, setMainImage] = useState<string>(product?.images[0] || '');

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  console.log(product)

  const dispatch = useAppDispatch();
    const handleAddProduct = (product: IProduct) => {
      dispatch( addProduct(product));
    };

  if (!product) {
    return <div className='text-center py-12'>Product not found</div>;
  }

  return (
    <div className='max-w-7xl mx-auto py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Product Images Section */}
        <div className='space-y-4'>
          <div className='bg-gray-100 rounded-lg overflow-hidden'>
            <Image
              src={mainImage}
              alt={product.name}
              width={500}
              height={400}
              className='w-full h-auto object-contain p-8 transition-all duration-300'
            />
          </div>
          <div className='grid grid-cols-4 gap-2'>
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className='bg-gray-100 rounded-lg p-2 cursor-pointer border hover:border-blue-500 transition-all'
                onMouseEnter={() => setMainImage(product.images[0])}
              >
                <Image
                  src={product.images[3]}
                  alt={`${product.name} view ${index + 1}`}
                  width={500}
                  height={500}
                  className='w-full h-auto object-contain'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className='space-y-6'>
          <Badge className='bg-green-500 text-white hover:bg-green-600'>
            New Arrival
          </Badge>

          <h1 className='text-3xl font-bold'>{product.name}</h1>

          <div className='flex items-center'>
            <div className='flex'>
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-xl ${
                    index < 4 || (index === 4 && product._id === '1')
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className='ml-2 text-lg font-semibold'>
              {product.averageReview}
            </span>
            <span className='ml-2 text-gray-500'>{product.totalReviews}</span>
          </div>

          <div className='flex items-center space-x-3'>
            <span className='text-3xl font-bold'>
              ${product.price.toFixed(2)}
            </span>
            {product.price && (
              <>
                <span className='text-gray-500 line-through'>
                  ${product.price.toFixed(2)}
                </span>
                <span className='text-red-500'>(30% Off)</span>
              </>
            )}
          </div>

          {/* Size Selection */}
          <div>
            <div className='text-lg mb-2'>Size &gt; {selectedSize}</div>
            <RadioGroup
              value={selectedSize}
              onValueChange={setSelectedSize}
              className='flex flex-wrap gap-2'
            >
              {sizeOptions.map((size) => (
                <Button
                  key={size}
                  type='button'
                  variant={selectedSize === size ? 'default' : 'outline'}
                  className={cn(
                    'w-12 h-12 rounded-md',
                    selectedSize === size
                      ? 'bg-gray-200 text-black border-gray-300'
                      : 'bg-white text-black hover:bg-gray-100'
                  )}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </RadioGroup>
          </div>

          {/* Quantity */}
          <div>
            <div className='text-lg mb-2'>Quantity :</div>
            <div className='flex items-center w-fit border border-gray-300 rounded-md'>
              <button
                onClick={handleDecrement}
                className='px-4 py-2 hover:bg-gray-100'
              >
                <Minus className='h-4 w-4' />
              </button>
              <span className='px-4 py-2 min-w-[40px] text-center'>
                {quantity}
              </span>
              <button
                onClick={handleIncrement}
                className='px-4 py-2 hover:bg-gray-100'
              >
                <Plus className='h-4 w-4' />
              </button>
            </div>
          </div>

          {/* Availability */}
          <div className='space-y-2'>
            <div className='flex items-center text-green-600'>
              <Check className='mr-2 h-4 w-4' />
              <span>In Stock</span>
            </div>
            <div className='flex items-center text-green-600'>
              <Check className='mr-2 h-4 w-4' />
              <span>Free delivery available</span>
            </div>
            <div className='flex items-center text-green-600'>
              <Check className='mr-2 h-4 w-4' />
              <span>Sales 10% Off Use Code: CODE123</span>
            </div>
          </div>

          {/* Buttons */}
          <div className='flex gap-3 pt-4'>
            <Button
              className='bg-orange-500 hover:bg-orange-600 transition-all'
              onClick={() => handleAddProduct(product)}
            >
              <ShoppingCart className='mr-1 h-5 w-5' />
              Add To Cart
            </Button>
            <Button
              variant='outline'
              className='hover:bg-gray-100 transition-all'
              onClick={() => handleAddProduct(product)}
            >
              <ShoppingBag className='mr-1 h-5 w-5' />
              Buy Now
            </Button>
            <Button
              variant='outline'
              className='p-3 aspect-square hover:bg-pink-100 transition-all'
              onClick={() => alert('Added to wishlist!')}
            >
              <Heart className='h-5 w-5 text-pink-500' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
