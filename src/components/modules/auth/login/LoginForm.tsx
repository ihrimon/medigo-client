/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

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
import Google from '@/app/assets/svgs/Google';
import Facebook from '@/app/assets/svgs/Facebook';
import authImage from '../../../../app/assets/auth.png';
import Image from 'next/image';
import { loginSchema } from '@/schemas';
import { loginDefaultValues } from '@/constants';
import { loginUser } from '@/services/auth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import { toast } from 'sonner';
import Logo from '@/components/shared/Logo';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: loginDefaultValues
  });
  const { setIsLoading } = useUser();

    const searchParams = useSearchParams();
    const redirect = searchParams.get('redirectPath');
    const router = useRouter();

const {
  formState: { isSubmitting },
} = form;


  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      const res = await loginUser(data);
      if (res?.success) {
        toast.success(res?.message);
        if (redirect) {
          router.push(redirect);
        } else {
          router.push('/');
        }
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
        <div className='w-full bg-white p-8 rounded-lg shadow-sm'>
          <div className='flex justify-center mb-6'>
            <Logo />
          </div>

            <p className='text-gray-600 my-3 text-center'>
              Sign In To Continue To Medigo.
            </p>

          <div className='flex gap-3 mb-6'>
            <Button variant='outline' className='w-1/2 gap-2'>
              <Google />
              Google
            </Button>
            <Button variant='outline' className='w-1/2 gap-2'>
              <Facebook />
              Facebook
            </Button>
          </div>

          <div className='relative mb-6'>
            <div className='absolute inset-0 flex items-center'>
              <span className='w-full border-t border-gray-300'></span>
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-2 bg-white text-gray-500'>
                or continue with email
              </span>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
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

              <Button type='submit' className='mt-5 w-full'>
                {isSubmitting ? 'Logging....' : 'Login'}
              </Button>
            </form>
          </Form>

          <div className='text-center mt-6'>
            <p className='text-sm text-gray-600'>
              Don&apos;t have an account?{' '}
              <Link
                href='/register'
                className='text-teal-600 hover:underline font-medium'
              >
                Register here
              </Link>
            </p>
          </div>
        </div>

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
