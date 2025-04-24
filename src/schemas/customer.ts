import { z } from 'zod';

export const customerSchema = z.object({
  fullName: z
    .string({ required_error: 'Full name is required' })
    .min(1, 'Please enter your full name'),
  username: z.string().optional(),
  email: z
    .string({ required_error: 'Email address is required' })
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[\d+\-()\s]+$/.test(val), {
      message: 'Phone number is invalid',
    }),
  profileImage: z.string().url('Profile image must be a valid URL').optional(),
  occupation: z.string().optional(),
  bio: z.string().optional(),
  gender: z
    .enum(['male', 'female', 'other'], {
      required_error: 'Gender is required',
      invalid_type_error: 'Gender must be male, female, or other',
    })
    .optional(),
  address: z.object({
    street: z
      .string({ required_error: 'Street address is required' })
      .min(1, 'Please enter a street address'),
    city: z
      .string({ required_error: 'City is required' })
      .min(1, 'Please enter your city'),
    state: z
      .string({ required_error: 'State is required' })
      .min(1, 'Please enter your state'),
    zipCode: z
      .string({ required_error: 'Zip code is required' })
      .min(1, 'Please enter your zip code'),
    country: z
      .string({ required_error: 'Country is required' })
      .min(1, 'Please enter your country'),
  }),
  status: z
    .string({ required_error: 'Status is required' })
    .min(1, 'Please select a valid status'),
  registrationDate: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Date.parse(val)), {
      message: 'Invalid date format',
    }),
});
