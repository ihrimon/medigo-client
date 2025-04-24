/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

// add product
export const addProduct = async (productData: FormData): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/products/add`,
      {
        method: 'POST',
        body: productData,
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
      }
    );
    revalidateTag('PRODUCT');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// get all products
export const getAllProducts = async (
  page?: string,
  limit?: string,
  query?: { [key: string]: string | string[] | undefined }
) => {
  const params = new URLSearchParams();

  if (query?.price) {
    params.append('minPrice', '0');
    params.append('maxPrice', query?.price.toString());
  }

  if (query?.category) {
    params.append('categories', query?.category.toString());
  }
  if (query?.brand) {
    params.append('brands', query?.brand.toString());
  }
  if (query?.rating) {
    params.append('ratings', query?.rating.toString());
  }

  const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_API}/products?limit=${limit}&page=${page}&${params}`;

  try {
    const res = await fetch(apiUrl, {
      next: {
        tags: ['PRODUCT'],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

// get single product
export const getSingleProduct = async (productId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/products/${productId}`,
      {
        next: {
          tags: ['PRODUCT'],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

// update product
export const updateProduct = async (
  productId: string,
  productData: FormData,
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/products/update/${productId}`,
      {
        method: 'PATCH',
        body: productData,
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
      }
    );
    revalidateTag('PRODUCT');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};


// delete product
export const deleteProduct = async (productId: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/products/${productId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
      }
    );
    revalidateTag('Category');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
