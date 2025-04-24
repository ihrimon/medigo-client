import { z } from 'zod';

export const addProductSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(1, 'Name is required'),

  description: z.string().optional(),

  brand: z
    .string({
      required_error: 'Brand is required',
    })
    .min(1, 'Brand is required'),

  category: z
    .string({
      required_error: 'Category is required',
    })
    .min(1, 'Category is required'),

  price: z.coerce
    .number({
      required_error: 'Price is required',
      invalid_type_error: 'Price must be a number',
    })
    .min(0, 'Price must be a positive number'),

  discount: z.coerce
    .number({
      invalid_type_error: 'Discount must be a number',
    })
    .min(0, 'Discount must be a positive number')
    .max(100, 'Discount cannot be more than 100')
    .optional(),

  discountPrice: z.coerce
    .number({
      invalid_type_error: 'Discount price must be a number',
    })
    .optional(),

  stock: z.coerce
    .number({
      required_error: 'Stock is required',
      invalid_type_error: 'Stock must be a number',
    })
    .min(0, 'Stock must be a positive number'),

  dosageForm: z
    .string({
      required_error: 'Dosage form is required',
    })
    .min(1, 'Dosage form is required'),
  expiryDate: z.date({
    required_error: 'Expiry date is required',
  }),

  prescriptionRequired: z.boolean().optional(),
});
