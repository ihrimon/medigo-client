/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

// create order
export const createOrder = async (orderData: any): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/orders/create`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: (await cookies()).get('accessToken')!.value,
        },
        body: JSON.stringify(orderData),
      }
    );

    revalidateTag('ORDER');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// get all orders (admin)
export const getAllOrders = async (): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/orders`, {
      headers: {
        Authorization: (await cookies()).get('accessToken')!.value,
      },
      next: {
        tags: ['ORDER'],
      },
    });
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// get single order by id
export const getSingleOrder = async (orderId: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/orders/${orderId}`,
      {
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
        next: {
          tags: ['ORDER'],
        },
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// get my orders (for customer)
export const getMyOrders = async (): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/orders/my-orders`,
      {
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
        next: {
          tags: ['ORDER'],
        },
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// update order status (admin)
export const updateOrderStatus = async (
  orderId: string,
  status: string
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/orders/update-status/${orderId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: (await cookies()).get('accessToken')!.value,
        },
        body: JSON.stringify({ status }),
      }
    );

    revalidateTag('ORDER');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// delete order (optional, mostly for admin)
export const deleteOrder = async (orderId: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/orders/${orderId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
      }
    );

    revalidateTag('ORDER');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
