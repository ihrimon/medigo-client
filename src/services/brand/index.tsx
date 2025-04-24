/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { getValidToken } from '@/lib/verifyToken';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

// create brand
export const createBrand = async (brandData: FormData): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/brands/add`,
      {
        method: 'POST',
        body: brandData,
        headers: {
          Authorization: token,
        },
      }
    );

    revalidateTag('Brands');

    return res.json();
  } catch (error: any) {
    throw new Error(error.message || 'Something went wrong');
  }
};

//  get all brands
export const getAllBrands = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/brands`, {
      next: {
        tags: ['Brands'],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

// update brand
export const updateBrand = async (
  brandId: string,
  brandData: FormData,
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/brands/update/${brandId}`,
      {
        method: 'PATCH',
        body: brandData,
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
      }
    );
    revalidateTag('BRAND');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};


// delete brand
export const deleteBrand = async (brandId: string): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/brands/${brandId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
      }
    );
    revalidateTag('Brands');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
