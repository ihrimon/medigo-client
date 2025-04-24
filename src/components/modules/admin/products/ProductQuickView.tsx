import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

// Types for our product
interface ProductColor {
  name: string;
  value: string;
  selected?: boolean;
}

interface ProductSize {
  name: string;
  selected?: boolean;
}

interface ProductOffer {
  description: string;
}

interface ProductProps {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  description: string;
  colors: ProductColor[];
  sizes: ProductSize[];
  inStock: boolean;
  offers: ProductOffer[];
  image: string;
  thumbnails?: string[];
  isNewArrival?: boolean;
}

const ProductQuickView = ({
  name,
  price,
  originalPrice,
  discountPercentage,
  rating,
  reviewCount,
  description,
  colors,
  sizes,
  inStock,
  offers,
  image,
  thumbnails = [],
  isNewArrival = false,
}: ProductProps) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    colors.find((c) => c.selected)?.name || colors[0].name
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    sizes.find((s) => s.selected)?.name || sizes[0].name
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<string>(image);

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleThumbnailClick = (thumbnail: string) => {
    setActiveImage(thumbnail);
  };

  return (
    <div className='flex flex-col md:flex-row gap-8 p-4 bg-white rounded-lg shadow-sm'>
      {/* Left side - Product Images */}
      <div className='md:w-1/2'>
        <div className='bg-gray-50 rounded-md p-4 mb-4'>
          <Image
            src={activeImage}
            alt={name}
            width={500}
            height={500}
            className='w-full h-auto object-contain max-h-[500px]'
          />
        </div>
        {thumbnails && thumbnails.length > 0 && (
          <div className='flex gap-2 mt-2'>
            {thumbnails.map((thumb, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(thumb)}
                className={cn(
                  'border rounded-md overflow-hidden w-16 h-16',
                  activeImage === thumb
                    ? 'border-primary ring-1 ring-primary'
                    : 'border-gray-200'
                )}
              >
                <Image
                  src={thumb}
                  width={500}
                  height={500}
                  alt={`${name} thumbnail ${index + 1}`}
                  className='w-full h-full object-cover'
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right side - Product Info */}
      <div className='md:w-1/2'>
        {isNewArrival && (
          <span className='inline-block bg-green-500 text-white px-4 py-1 rounded-md text-sm font-medium mb-3'>
            New Arrival
          </span>
        )}

        <h1 className='text-2xl font-semibold text-gray-800 mb-2'>{name}</h1>

        {/* Ratings */}
        <div className='flex items-center mb-4'>
          <div className='flex items-center'>
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-5 h-5 ${
                  star <= Math.floor(rating)
                    ? 'text-yellow-400'
                    : star <= rating
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
            ))}
          </div>
          <span className='ml-2 text-gray-700 font-medium'>{rating}</span>
          <span className='ml-2 text-gray-500'>
            ({reviewCount} Review{reviewCount !== 1 ? 's' : ''})
          </span>
        </div>

        {/* Price */}
        <div className='flex items-center mb-6'>
          <span className='text-3xl font-bold text-gray-800'>
            ${price.toFixed(2)}
          </span>
          {originalPrice > price && (
            <>
              <span className='ml-2 text-gray-500 line-through'>
                ${originalPrice.toFixed(2)}
              </span>
              <span className='ml-2 text-red-500'>
                ({discountPercentage}% Off)
              </span>
            </>
          )}
        </div>

        {/* Color Selection */}
        <div className='mb-6'>
          <div className='flex items-center mb-2'>
            <span className='text-gray-700'>Colors &gt; </span>
            <span className='ml-1 font-medium'>{selectedColor}</span>
          </div>
          <div className='flex gap-2'>
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={cn(
                  'w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
                  selectedColor === color.name && 'ring-2 ring-gray-800'
                )}
                style={{ backgroundColor: color.value }}
                aria-label={`Select ${color.name} color`}
              />
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className='mb-6'>
          <div className='flex items-center mb-2'>
            <span className='text-gray-700'>Size &gt; </span>
            <span className='ml-1 font-medium'>{selectedSize}</span>
          </div>
          <div className='flex gap-2'>
            {sizes.map((size) => (
              <button
                key={size.name}
                onClick={() => setSelectedSize(size.name)}
                className={cn(
                  'w-10 h-10 flex items-center justify-center border rounded-md text-sm',
                  selectedSize === size.name
                    ? 'bg-gray-200 border-gray-300 font-medium'
                    : 'bg-white border-gray-200 text-gray-700'
                )}
              >
                {size.name}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className='mb-6'>
          <p className='text-gray-700 mb-2'>Quantity :</p>
          <div className='flex items-center'>
            <button
              onClick={() => handleQuantityChange(-1)}
              className='w-10 h-10 rounded-l-md bg-gray-100 flex items-center justify-center border border-gray-200'
              disabled={quantity <= 1}
            >
              <span className='text-xl'>-</span>
            </button>
            <div className='w-12 h-10 flex items-center justify-center border-t border-b border-gray-200'>
              {quantity}
            </div>
            <button
              onClick={() => handleQuantityChange(1)}
              className='w-10 h-10 rounded-r-md bg-gray-100 flex items-center justify-center border border-gray-200'
            >
              <span className='text-xl'>+</span>
            </button>
          </div>
        </div>

        {/* Availability */}
        <div className='mb-6 space-y-2'>
          {inStock && (
            <div className='flex items-center text-gray-700'>
              <svg
                className='w-5 h-5 mr-2 text-green-500'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span>In Stock</span>
            </div>
          )}
          <div className='flex items-center text-gray-700'>
            <svg
              className='w-5 h-5 mr-2 text-green-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 13l4 4L19 7'
              />
            </svg>
            <span>Free delivery available</span>
          </div>
          <div className='flex items-center text-gray-700'>
            <svg
              className='w-5 h-5 mr-2 text-green-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 13l4 4L19 7'
              />
            </svg>
            <span>Sales 10% Off Use Code: CODE123</span>
          </div>
        </div>

        {/* Description */}
        <div className='mb-6'>
          <h3 className='text-lg font-medium text-gray-800 mb-2'>
            Description :
          </h3>
          <p className='text-gray-600'>{description}</p>
          <button className='text-blue-500 hover:underline mt-1'>
            Read more
          </button>
        </div>

        {/* Available Offers */}
        {offers && offers.length > 0 && (
          <div className='mb-6'>
            <h3 className='text-lg font-medium text-gray-800 mb-2'>
              Available offers :
            </h3>
            <ul className='space-y-2'>
              {offers.map((offer, index) => (
                <li key={index} className='flex items-start'>
                  <span className='mr-2 mt-1 text-green-500'>
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 4.707a1 1 0 00-1.414 1.414L10.586 10l-2.293 2.293a1 1 0 101.414 1.414L12 11.414l2.293 2.293a1 1 0 001.414-1.414L13.414 10l2.293-2.293a1 1 0 00-1.414-1.414L12 8.586 9.707 6.293z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                  <span className='text-gray-600'>{offer.description}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className='flex gap-3'>
          <Button className='flex-1 bg-orange-500 hover:bg-orange-600'>
            <ShoppingCart className='mr-2 h-4 w-4' />
            Add To Cart
          </Button>
          <Button variant='outline' className='flex-1'>
            <span className='mr-2'>
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
            </span>
            Buy Now
          </Button>
          <Button
            variant='outline'
            className='w-12 h-12 p-0 flex items-center justify-center rounded-md'
            aria-label='Add to wishlist'
          >
            <Heart className='h-5 w-5 text-gray-500' />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;
