/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

// create payment
export const createPayment = async (paymentData: any): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/payments/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: (await cookies()).get('accessToken')!.value,
      },
      body: JSON.stringify(paymentData),
    });

    revalidateTag('PAYMENT');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// get all payments (admin)
export const getAllPayments = async (): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/payments`, {
      headers: {
        Authorization: (await cookies()).get('accessToken')!.value,
      },
      next: {
        tags: ['PAYMENT'],
      },
    });

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// get single payment by id
export const getMyPaymentHistory = async (id: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/payments/${id}`,
      {
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
        next: {
          tags: ['PAYMENT'],
        },
      }
    );

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
