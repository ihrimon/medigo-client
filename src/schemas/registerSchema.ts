import { z } from 'zod';

export const registrationSchema = z.object({
  name: z.string().min(3, {
    message: 'Name must be at least 3 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
  passwordConfirm: z
    .string({ required_error: 'Password Confirmation is required' })
    .min(1),
  acceptTerms: z.boolean().refine((value) => value === true, {
    message: 'You must accept the terms and conditions.',
  }),
});
