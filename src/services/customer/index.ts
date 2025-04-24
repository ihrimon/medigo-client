/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

// get all customers
export const getAllCustomers = async (): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/customers`,
      {
        next: {
          tags: ['CUSTOMER'],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

// get single customer
export const getSingleCustomer = async (userId: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/customers/${userId}`,
      {
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
        next: {
          tags: ['CUSTOMER'],
        },
      }
    );
    const data = await res.json();
    console.log('data in services', data);
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

// update customer
export const updateCustomer = async (
  customerId: string,
  customerData: FormData
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/customers/update/${customerId}`,
      {
        method: 'PATCH',
        body: customerData,
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
      }
    );
    revalidateTag('CUSTOMER');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// delete customer
export const deleteCustomer = async (customerId: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/users/${customerId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
      }
    );
    revalidateTag('CUSTOMER');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
