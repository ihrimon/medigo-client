import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Banknote, CheckCircle, Minus, Plus, Truck} from 'lucide-react';
import { IProduct } from '@/types';
import Image from 'next/image';
import { useAppDispatch } from '@/redux/hooks';
import { addProduct } from '@/redux/features/cartSlice';
import { useState } from 'react';
import { Heart, ShoppingCart, Lock } from 'lucide-react';

interface QuickViewProps {
  product: IProduct;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuickView: React.FC<QuickViewProps> = ({
  product,
  open,
  onOpenChange,
}) => {
  const dispatch = useAppDispatch();
    const handleAddProduct = (product: IProduct) => {
      dispatch(addProduct(product));
    };
  const [quantity, setQuantity] = React.useState<number>(1);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleQty = (type: 'inc' | 'dec') => {
    setQuantity((prev) => (type === 'inc' ? prev + 1 : Math.max(1, prev - 1)));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-5xl max-h-screen overflow-y-auto py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Left side - Product Image */}
          <div className='flex items-center justify-center bg-gray-100 p-8'>
            <div className='max-w-md mx-auto p-4 rounded-xl bg-[#f1f5f9]'>
              {/* Main Image */}
              <div className='rounded-xl overflow-hidden bg-white flex justify-center p-6 mb-4'>
                <Image
                  src={selectedImage}
                  alt='Product'
                  width={300}
                  height={300}
                  className='object-contain'
                />
              </div>

              {/* Thumbnail Images */}
              <div className='flex justify-center gap-3 mb-6'>
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-14 h-14 rounded-md overflow-hidden border-2 cursor-pointer ${
                      selectedImage === img
                        ? 'border-orange-500'
                        : 'border-transparent'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      width={56}
                      height={56}
                      className='object-cover w-full h-full'
                    />
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className='flex gap-4'>
                <Button
                  onClick={() => handleAddProduct(product)}
                  disabled={product?.stock === 0}
                  className='flex-1 bg-orange-500 hover:bg-orange-600 text-white'
                >
                  <ShoppingCart className='mr-2 h-4 w-4' />
                  Add To Cart
                </Button>
                <Button className='flex-1 bg-blue-100 text-blue-700 hover:bg-blue-200'>
                  <Lock className='mr-2 h-4 w-4' />
                  Buy Now
                </Button>
                <Button
                  variant='ghost'
                  className='text-red-500 hover:text-red-600 px-3'
                >
                  <Heart />
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Product Details */}

          <div className='space-y-4 max-w-2xl mx-auto'>
            {/* Title & Rating */}
            <h2 className='text-2xl font-semibold text-gray-800'>
              {product.name}
            </h2>
            {product.averageReview && product.totalReviews && (
              <p className='text-yellow-500 text-sm font-medium'>
                ★ {product.averageReview}{' '}
                <span className='text-gray-500'>
                  ({product.totalReviews} Review)
                </span>
              </p>
            )}

            {/* Price */}
            <div className='flex items-center gap-4 text-xl font-semibold text-gray-900'>
              {product.discountPrice && <span>${product.discountPrice}</span>}
              <span className='text-gray-400 text-base'>
                Price: ${product.price}
              </span>
              {product.discount && (
                <span className='text-red-500 text-sm font-normal'>
                  ({product.discount}% off)
                </span>
              )}
            </div>

            {/* Sizes */}
            <div>
              <p className='font-medium mb-1'>Strength</p>
              <div className='flex gap-2'>
                {product.strength.map((item, idx) => (
                  <button
                    key={idx}
                    className='rounded-md px-3 py-1 text-sm border cursor-pointer'
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className='font-medium mb-1'>Quantity :</p>
              <div className='flex items-center gap-2'>
                <Button
                  onClick={() => handleQty('dec')}
                  variant='outline'
                  size='icon'
                >
                  <Minus className='w-4 h-4' />
                </Button>
                <span>{quantity}</span>
                <Button
                  onClick={() => handleQty('inc')}
                  variant='outline'
                  size='icon'
                >
                  <Plus className='w-4 h-4' />
                </Button>
              </div>
            </div>

            {/* Availability & Offer */}
            <ul className='text-green-600 space-y-1 text-sm'>
              <li className='flex items-center gap-2'>
                <CheckCircle className='w-4 h-4' /> In Stock ({product.stock})
              </li>
              <li className='flex items-center gap-2'>
                <Truck className='w-4 h-4' /> Free delivery available
              </li>
              <li className='text-gray-800'>
                🔥 Sales 10% Off Use Code:{' '}
                <span className='font-semibold text-black'>Medigo123</span>
              </li>
            </ul>

            {/* Description */}
            <div>
              <p className='font-medium'>Description :</p>
              <p className='text-sm text-gray-700 mt-1'>
                {product.description}.{' '}
                <span className='text-red-500 font-medium cursor-pointer'>
                  Read more
                </span>
              </p>
            </div>

            {/* Bank Offers */}
            <div>
              <p className='font-medium'>Available offers :</p>
              <ul className='text-sm text-gray-800 space-y-2 mt-1'>
                <li className='flex items-start gap-2'>
                  <Banknote className='text-green-600 mt-1' />
                  Bank Offer 10% instant discount on Bank Debit Cards, up to $30
                  on orders of $50 and above
                </li>
                <li className='flex items-start gap-2'>
                  <Banknote className='text-green-600 mt-1' />
                  Bank Offer Grab our exclusive offer now and save 20% on your
                  next purchase! Don&apos;t miss out, shop today!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickView;
