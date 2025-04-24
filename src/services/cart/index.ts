/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { CartProduct } from '@/redux/features/cartSlice';
import { IOrder } from '@/types/cart';
import { cookies } from 'next/headers';

export const createOrder = async (order: IOrder) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/orders/create`, {
      method: 'POST',
      headers: {
        Authorization: (await cookies()).get('accessToken')!.value,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });

    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const createCheckoutSession = async (
  cartProducts: CartProduct[]
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/orders/create-checkout-session`,
      {
        method: 'POST',
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cartProducts }),
      }
    );

    return await res.json();

  } catch (error: any) {
    return Error(error);
  }
};
