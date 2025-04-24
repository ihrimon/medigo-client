import { z } from 'zod';

export const addCategorySchema = z.object({
  name: z
    .string({ required_error: 'Category name is required' })
    .min(3, { message: 'Category name must be at least 3 characters long' }),

  items: z.coerce
    .number({
      required_error: 'Price is required',
      invalid_type_error: 'Price must be a number',
    })
    .min(0, 'Price must be a positive number'),
});
