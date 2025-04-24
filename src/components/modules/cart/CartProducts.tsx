'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  CartProduct,
  clearCart,
  orderedProductsSelector,
} from '@/redux/features/cartSlice';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import Link from 'next/link';
import CartProductCard from '@/components/modules/cart/CartProductCard';

const CartProducts = () => {
  const products = useAppSelector(orderedProductsSelector);
  const dispatch = useAppDispatch();

const handleClearCart = () => {
  dispatch(clearCart());
  toast.success('Cart cleared');
};
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
      {/* Products list */}
      <div className='lg:col-span-2'>
        {products.length === 0 ? (
          <Card className='p-8 text-center'>
            <p className='text-muted-foreground'>Your cart is empty</p>
            <Button className='mt-4' asChild>
              <Link href='/'>Continue Shopping</Link>
            </Button>
          </Card>
        ) : (
          <div className='space-y-6'>
            {/* Header */}
            <div className='hidden md:grid grid-cols-12 gap-4 px-4 py-2 font-medium text-sm text-muted-foreground'>
              <div className='col-span-6'>Product</div>
              <div className='col-span-2 text-center'>Price</div>
              <div className='col-span-2 text-center'>Quantity</div>
              <div className='col-span-2 text-center'>Total</div>
            </div>

            {/* Cart Items */}
            {products.map((item: CartProduct) => (
              <CartProductCard key={item._id} product={item} />
            ))}

            <Button onClick={handleClearCart} variant='outline'>
              Clear Cart
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartProducts;