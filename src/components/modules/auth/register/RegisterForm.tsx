/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import authImage from '../../../../app/assets/auth.png';
import { registrationSchema } from '@/schemas';
import { registerDefaultValues } from '@/constants';
import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/services/auth';
import { toast } from 'sonner';
import Google from '@/app/assets/svgs/Google';
import Facebook from '@/app/assets/svgs/Facebook';
import Logo from '@/components/shared/Logo';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: registerDefaultValues,
  });

  const {
    formState: { isSubmitting },
  } = form;

  const password = form.watch('password');
  const passwordConfirm = form.watch('passwordConfirm');
  const acceptTerms = form.watch('acceptTerms');

  const router = useRouter();

  const { setIsLoading } = useUser();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log('form data', data);
    try {
      const res = await registerUser(data);
      console.log('response', res);
      setIsLoading(true);
      if (res?.success) {
        toast.success(res?.message);
        router.push('/login');
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className='flex items-center justify-center p-4'>
      <div className='flex w-full'>
        {/* Form Section */}
        <div className='w-full md:w-1/2 bg-white p-8 rounded-lg shadow-sm'>
          <div className='flex justify-center mb-6'>
            <Logo />
          </div>

          <div className='text-center mb-6'>
            {/* <h1 className='text-2xl font-medium text-gray-800'>Welcome back</h1> */}
            <p className='text-gray-600 mt-1'>Sign Up To Continue To MediGo.</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your fullname' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='Enter your email'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className='relative'>
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder='Enter your password'
                          className='pr-10'
                          {...field}
                        />
                        <button
                          type='button'
                          onClick={() => setShowPassword(!showPassword)}
                          className='absolute inset-y-0 right-0 flex items-center pr-3'
                        >
                          {showPassword ? (
                            <EyeOff className='h-4 w-4 text-gray-500' />
                          ) : (
                            <Eye className='h-4 w-4 text-gray-500' />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='passwordConfirm'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <div className='relative'>
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder='Enter confirm password'
                          className='pr-10'
                          {...field}
                        />
                        <button
                          type='button'
                          onClick={() => setShowPassword(!showPassword)}
                          className='absolute inset-y-0 right-0 flex items-center pr-3'
                        >
                          {showPassword ? (
                            <EyeOff className='h-4 w-4 text-gray-500' />
                          ) : (
                            <Eye className='h-4 w-4 text-gray-500' />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    {passwordConfirm && password !== passwordConfirm ? (
                      <FormMessage> Password does not match </FormMessage>
                    ) : (
                      <FormMessage />
                    )}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='acceptTerms'
                render={({ field }) => (
                  <FormItem className='flex flex-row items-start space-x-3 space-y-0 mt-2'>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className='space-y-1 leading-none'>
                      <FormLabel className='font-normal'>
                        I agree to the{' '}
                        <Link
                          href='/terms'
                          className='text-teal-600 hover:underline'
                        >
                          Terms and Conditions
                        </Link>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button
                disabled={password !== passwordConfirm || !acceptTerms}
                type='submit'
                className='w-full bg-teal-600 hover:bg-teal-700 text-white'
              >
                {isSubmitting ? 'Registering....' : 'Register'}
              </Button>
            </form>
          </Form>

          <div className='text-center mt-6'>
            <p className='text-sm text-gray-600'>
              Already have an account?{' '}
              <Link
                href='/login'
                className='text-teal-600 hover:underline font-medium'
              >
                Login here
              </Link>
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className='hidden md:block p-8'>
          <div className='h-full flex items-center justify-center'>
            <Image
              src={authImage}
              alt='Register image'
              width={500}
              height={500}
              className='max-h-full object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
