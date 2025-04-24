/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { Plus } from 'lucide-react';
import ImagePreviewer from '@/components/ui/core/CustomImageUploader/ImagePreviewer';
import CustomImageUploader from '@/components/ui/core/CustomImageUploader';
import { createBrand } from '@/services/brand';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { createBrandSchema } from '@/schemas/brand';

const AddBrandModal = () => {
  const [open, setOpen] = useState(false);
  const [logoFiles, setLogoFiles] = useState<File[]>([]);
  const [logoPreview, setLogoPreview] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [logoRequiredError, setLogoRequiredError] = useState('');
  const [imageRequiredError, setImageRequiredError] = useState('');

  const form = useForm({
    resolver: zodResolver(createBrandSchema),
  });
  const {
    formState: { isSubmitting },
    reset,
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();

      const formattedData = {
        ...data,
        slug: `${data.name.toLowerCase().replace(/\s+/g, '')}${data.established
          .toString()
          .slice(-2)}`,
        established: parseInt(data.established),
        stores: parseInt(data.stores),
        products: parseInt(data.products),
      };
      formData.append('data', JSON.stringify(formattedData));

      if (logoFiles.length > 0 && imageFiles.length > 0) {
        formData.append('logo', logoFiles[0]);
        formData.append('image', imageFiles[0]);
        setLogoRequiredError('');
        setImageRequiredError('');
      } else {
        setImageRequiredError('Image is required');
        setLogoRequiredError('Logo is required');
        return;
      }

      const res = await createBrand(formData);

      if (res.success) {
        toast.success(res.message);
        reset();
        setLogoFiles([]);
        setLogoPreview([]);
        setImageFiles([]);
        setImagePreview([]);
        setOpen(false); 
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size='sm'
          onClick={() => setOpen(true)}
          className='cursor-pointer'
        >
          Create Brand <Plus className='h-4 w-4 ml-1' />
        </Button>
      </DialogTrigger>
      <DialogContent className='w-full max-w-2xl'>
        <DialogHeader>
          <DialogTitle className='text-2xl mb-6 text-center'>
            Create Brand
          </DialogTitle>
        </DialogHeader>

        <div className='flex items-center justify-between gap-6'>
          <div className='w-full flex flex-col items-center gap-3'>
            <label className='text-sm font-medium'>Upload Logo</label>
            {logoPreview.length > 0 ? (
              <ImagePreviewer
                setImageFiles={setLogoFiles}
                imagePreview={logoPreview}
                setImagePreview={setLogoPreview}
              />
            ) : (
              <>
                <CustomImageUploader
                  setImageFiles={setLogoFiles}
                  setImagePreview={setLogoPreview}
                  label='Upload Logo'
                />
                {logoRequiredError && (
                  <p className='text-sm text-red-500'>{logoRequiredError}</p>
                )}
              </>
            )}
          </div>

          {/* Brand Image Upload */}
          <div className='w-full flex flex-col items-center gap-3'>
            <label className='text-sm font-medium'>Upload Image</label>
            {imagePreview.length > 0 ? (
              <ImagePreviewer
                setImageFiles={setImageFiles}
                imagePreview={imagePreview}
                setImagePreview={setImagePreview}
              />
            ) : (
              <>
                <CustomImageUploader
                  setImageFiles={setImageFiles}
                  setImagePreview={setImagePreview}
                  label='Upload Image'
                />
                {imageRequiredError && (
                  <p className='text-sm text-red-500'>{imageRequiredError}</p>
                )}
              </>
            )}
          </div>
        </div>

        {/* Form Section */}
        <Form {...form}>
          <form
            className='grid grid-cols-1 sm:grid-cols-2 gap-4'
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>Brand Name</label>
                  <FormControl>
                    <Input {...field} placeholder='Brand Name' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='established'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>
                    Established Year
                  </label>
                  <FormControl>
                    <Input {...field} placeholder='Established Year' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='country'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>Country Name</label>
                  <FormControl>
                    <Input {...field} placeholder='Country Name' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='stores'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>Brand Stores</label>
                  <FormControl>
                    <Input {...field} placeholder='Brand Stores' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='products'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>Brand Products</label>
                  <FormControl>
                    <Input {...field} placeholder='Brand Products' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='tagline'
              render={({ field }) => (
                <FormItem className='sm:col-span-2'>
                  <label className='text-sm font-medium'>Brand Tagline</label>
                  <FormControl>
                    <Textarea {...field} placeholder='Brand Tagline here' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className='sm:col-span-2 flex justify-end'>
              <Button type='submit' className='w-full sm:w-auto'>
                {isSubmitting ? 'Creating...' : 'Create'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBrandModal;
