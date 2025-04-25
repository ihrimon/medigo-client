'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Upload } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useCustomer } from '@/context/UserContext';
// import { updateCustomer } from '@/services/customer';

const MyProfile = () => {
  const { customer } = useCustomer();

  const form = useForm({
    // resolver: zodResolver(customerSchema),
    // defaultValues: {
    //   fullName: '',
    //   username: '',
    //   email: '',
    //   phone: '',
    //   occupation: '',
    //   bio: '',
    //   address: {
    //     street: '',
    //     city: '',
    //     state: '',
    //     zipCode: '',
    //     country: '',
    //   },
    // },
  });

  useEffect(() => {
    if (customer) {
      form.reset({
        fullName: customer.fullName || '',
        username: customer.username || '',
        email: customer.email || '',
        phone: customer.phone || '',
        occupation: customer.occupation || '',
        bio: '',
        address: {
          street: customer.address?.street || '',
          city: customer.address?.city || '',
          state: customer.address?.state || '',
          zipCode: customer.address?.zipCode || '',
          country: customer.address?.country || '',
        },
      });
    }
  }, [customer, form]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      console.log('File selected:', e.target.files[0]);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log('submitted data', data);
    // const res = await updateCustomer(customer?._id, data); 
    // console.log(res);
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className='text-sm text-muted-foreground flex items-center'>
        <span>Account settings</span>
        <span className='mx-2'>/</span>
        <span className='text-foreground font-medium'>Profile</span>
      </div>

      {/* Header */}
      <div>
        <h1 className='text-3xl font-bold mb-2'>Profile</h1>
        <p className='text-muted-foreground'>
          Manage settings for your [Brand_name] profile
        </p>
      </div>

      <Separator />

      {/* Profile Picture */}
      <div>
        <h2 className='text-lg font-semibold mb-2'>Profile picture</h2>
        <div className='flex items-start gap-6'>
          <div className='space-y-2'>
            <p className='text-sm text-muted-foreground'>
              We support PNGs, JPEGs and GIFs under 10MB
            </p>
            <div>
              <label htmlFor='picture-upload'>
                <div className='inline-flex items-center px-4 py-2 border rounded-md cursor-pointer hover:bg-accent'>
                  <Upload className='mr-2 h-4 w-4' />
                  <span>Upload image</span>
                </div>
                <input
                  id='picture-upload'
                  type='file'
                  className='hidden'
                  accept='image/png, image/jpeg, image/gif'
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='grid grid-cols-1 sm:grid-cols-2 gap-4'
        >
          <FormField
            control={form.control}
            name='fullName'
            render={({ field }) => (
              <FormItem>
                <label className='text-sm font-medium'>Full Name</label>
                <FormControl>
                  <Input {...field} placeholder='Full Name' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <label className='text-sm font-medium'>Username</label>
                <FormControl>
                  <Input {...field} placeholder='Username' />
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
                <label className='text-sm font-medium'>Email</label>
                <FormControl>
                  <Input {...field} placeholder='Email' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <label className='text-sm font-medium'>Phone</label>
                <FormControl>
                  <Input {...field} placeholder='Phone Number' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='occupation'
            render={({ field }) => (
              <FormItem>
                <label className='text-sm font-medium'>Occupation</label>
                <FormControl>
                  <Input {...field} placeholder='Occupation' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='gender'
            render={({ field }) => (
              <FormItem>
                <label className='text-sm font-medium'>Gender</label>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className='flex items-center space-x-4'
                  >
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='male' id='male' />
                      <label htmlFor='male' className='text-sm'>
                        Male
                      </label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='female' id='female' />
                      <label htmlFor='female' className='text-sm'>
                        Female
                      </label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='other' id='other' />
                      <label htmlFor='other' className='text-sm'>
                        Other
                      </label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='bio'
            render={({ field }) => (
              <FormItem className='sm:col-span-2'>
                <label className='text-sm font-medium'>Bio</label>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder='Write something about yourself...'
                    className='h-[120px]'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Address Section */}
          <div className='sm:col-span-2 mt-4 border-t pt-4'>
            <p className='text-primary font-semibold mb-2'>Address</p>

            <FormField
              control={form.control}
              name='address.street'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>Street</label>
                  <FormControl>
                    <Input {...field} placeholder='Street Address' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='grid grid-cols-2 gap-6 mt-6'>
              <FormField
                control={form.control}
                name='address.city'
                render={({ field }) => (
                  <FormItem>
                    <label className='text-sm font-medium'>City</label>
                    <FormControl>
                      <Input {...field} placeholder='City' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='address.state'
                render={({ field }) => (
                  <FormItem>
                    <label className='text-sm font-medium'>State</label>
                    <FormControl>
                      <Input {...field} placeholder='State' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='address.zipCode'
                render={({ field }) => (
                  <FormItem>
                    <label className='text-sm font-medium'>Zip Code</label>
                    <FormControl>
                      <Input {...field} placeholder='Zip Code' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='address.country'
                render={({ field }) => (
                  <FormItem>
                    <label className='text-sm font-medium'>Country</label>
                    <FormControl>
                      <Input {...field} placeholder='Country' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className='sm:col-span-2 flex justify-end mb-20 mt-6'>
            <Button type='submit' className='w-full'>
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default MyProfile;
