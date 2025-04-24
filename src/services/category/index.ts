/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

// create category
export const createCategory = async (data: FormData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/categories/add`,
      {
        method: 'POST',
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
        body: data,
      }
    );

    revalidateTag('Category');

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

//get all categories
export const getAllCategories = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/categories`,
      {
        next: {
          tags: ['CATEGORY'],
        },
      }
    );

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// update category
export const updateCategory = async (
  categoryId: string,
  categoryData: FormData
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/categories/update/${categoryId}`,
      {
        method: 'PATCH',
        body: categoryData,
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
      }
    );
    revalidateTag('CATEGORY');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// delete category
export const deleteCategory = async (categoryId: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/categories/${categoryId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
      }
    );
    revalidateTag('CATEGORY');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
