'use client';

import { MinusIcon, PlusIcon, TrashIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import {
  CartProduct,
  decrementOrderQuantity,
  incrementOrderQuantity,
  removeProduct,
  shippingAddressSelector,
} from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const CartProductCard = ({ product }: { product: CartProduct }) => {
  const dispatch = useAppDispatch();
  const address = useAppSelector(shippingAddressSelector);
  console.log(address);

  const handleIncrementQuantity = (id: string) => {
    dispatch(incrementOrderQuantity(id));
  };

  const handleDecrementQuantity = (id: string) => {
    dispatch(decrementOrderQuantity(id));
  };

  const handleRemoveProduct = (id: string) => {
    dispatch(removeProduct(id));
  };

  return (
    <Card className='p-4 relative'>
      <div className='absolute top-2 left-2 h-2 w-2 bg-red-500 rounded-full'></div>
      <div className='grid grid-cols-12 gap-4 items-center'>
        {/* Product info */}
        <div className='col-span-12 md:col-span-6 flex items-center gap-4'>
          <div className='h-20 w-20 bg-gray-100 rounded overflow-hidden flex items-center justify-center'>
            <Image
              src={product.images[0]}
              alt={product.name}
              width={500}
              height={500}
              className='h-16 w-16 object-cover'
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://placehold.co/80x80/lightgray/white?text=Product';
              }}
            />
          </div>
          <div>
            <h3 className='font-medium'>{product.name}</h3>
            <p className='text-sm text-muted-foreground'>
              DosgeForm: {product.dosageForm} {' | '} {product.strength[0]}
            </p>
            <p className='text-sm text-muted-foreground'>
              Quantity: {product.orderQuantity} PCS
            </p>
          </div>
        </div>

        <div className='col-span-4 md:col-span-2 flex justify-center'>
          <span className='font-medium'>{product.price.toFixed(2)}</span>
        </div>

        {/* Quantity */}
        <div className='col-span-4 md:col-span-2 flex items-center justify-center'>
          <Button
            variant='outline'
            size='icon'
            className='h-8 w-8 rounded-l'
            onClick={() => handleDecrementQuantity(product._id)}
          >
            <MinusIcon className='h-3 w-3' />
          </Button>
          <div className='h-8 w-8 flex items-center justify-center border border-input border-l-0 border-r-0'>
            {product.orderQuantity}
          </div>
          <Button
            variant='outline'
            size='icon'
            className='h-8 w-8 rounded-r'
            onClick={() => handleIncrementQuantity(product._id)}
          >
            <PlusIcon className='h-3 w-3' />
          </Button>
        </div>

        {/* Total & Remove */}
        <div className='col-span-4 md:col-span-2 flex items-center justify-between md:justify-center'>
          <span className='font-medium'>
            ${(product.price * product.orderQuantity).toFixed(2)}
          </span>
          <Button
            variant='ghost'
            size='icon'
            className='h-8 w-8 ml-2'
            onClick={() => handleRemoveProduct(product._id)}
          >
            <TrashIcon className='h-4 w-4 text-red-500' />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CartProductCard;
