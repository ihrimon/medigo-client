import { z } from 'zod';

export const createBrandSchema = z.object({
  name: z
    .string({ required_error: 'Brand name is required' })
    .min(1, 'Brand Name is required'),
  established: z.coerce
    .number({
      required_error: 'Established year is required',
    })
    .max(new Date().getFullYear(), 'Year cannot be in the future'),
  country: z
    .string({ required_error: 'Country name is required' })
    .min(1, 'Country is required'),
  stores: z.coerce
    .number({
      required_error: 'Number of stores is required',
      invalid_type_error: 'Stores must be a number',
    })
    .min(1, 'Stores must be a positive number'),
  products: z.coerce
    .number({
      required_error: 'Number of products is required',
      invalid_type_error: 'Products must be a number',
    })
    .min(1, 'Products must be a number'),
  tagline: z
    .string({ required_error: 'Tagline is required' })
    .min(1, 'Tagline is required'),
});
