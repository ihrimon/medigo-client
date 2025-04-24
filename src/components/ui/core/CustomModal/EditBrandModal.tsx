/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
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
import ImagePreviewer from '@/components/ui/core/CustomImageUploader/ImagePreviewer';
import CustomImageUploader from '@/components/ui/core/CustomImageUploader';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { createBrandSchema } from '@/schemas/brand';
import { updateBrand } from '@/services/brand';
import { IBrand } from '@/types';

interface EditBrandModalProps {
  brand: IBrand;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EditBrandModal = ({ brand, open, onOpenChange }: EditBrandModalProps) => {
  const [logoFiles, setLogoFiles] = useState<File[]>([]);
  const [logoPreview, setLogoPreview] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);

  const form = useForm({
    resolver: zodResolver(createBrandSchema),
    defaultValues: {
      name: brand.name,
      established: brand.established,
      tagline: brand.tagline,
      country: brand.country,
      stores: brand.stores,
      products: brand.products,
    },
  });

  const {
    formState: { isSubmitting },
    reset,
  } = form;

  useEffect(() => {
    setLogoPreview([brand.logo]);
    setImagePreview([brand.image]);
  }, [brand]);

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

      if (logoFiles.length > 0) {
        formData.append('logo', logoFiles[0]);
      }

      if (imageFiles.length > 0) {
        formData.append('image', imageFiles[0]);
      }

      console.log('brand id', brand._id);

      const res = await updateBrand(brand._id, formData);

      if (res.success) {
        toast.success(res.message);
        reset({
          name: brand.name,
          established: brand.established,
          tagline: brand.tagline,
          country: brand.country,
          stores: brand.stores,
          products: brand.products,
        });
        onOpenChange(false);
      } else {
        toast.error(res.message);
        console.log(res.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className='w-full max-w-2xl'>
        <DialogHeader>
          <DialogTitle className='text-2xl mb-6 text-center'>
            Update Brand
          </DialogTitle>
        </DialogHeader>

        <div className='flex items-center justify-between gap-6'>
          <div className='w-full flex flex-col items-center gap-3'>
            <label className='text-sm font-medium'>Update Logo</label>
            {logoPreview.length > 0 ? (
              <ImagePreviewer
                setImageFiles={setLogoFiles}
                imagePreview={logoPreview}
                setImagePreview={setLogoPreview}
              />
            ) : (
              <CustomImageUploader
                setImageFiles={setLogoFiles}
                setImagePreview={setLogoPreview}
                label='Upload Logo'
              />
            )}
          </div>

          <div className='w-full flex flex-col items-center gap-3'>
            <label className='text-sm font-medium'>Update Image</label>
            {imagePreview.length > 0 ? (
              <ImagePreviewer
                setImageFiles={setImageFiles}
                imagePreview={imagePreview}
                setImagePreview={setImagePreview}
              />
            ) : (
              <CustomImageUploader
                setImageFiles={setImageFiles}
                setImagePreview={setImagePreview}
                label='Upload Image'
              />
            )}
          </div>
        </div>

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
                  <label className='text-sm font-medium'>Country</label>
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
                    <Input {...field} placeholder='Stores Count' />
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
                    <Input {...field} placeholder='Products Count' />
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
                  <label className='text-sm font-medium'>Tagline</label>
                  <FormControl>
                    <Textarea {...field} placeholder='Brand Tagline here' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='sm:col-span-2 flex justify-end'>
              <Button type='submit' className='w-full sm:w-auto'>
                {isSubmitting ? 'Updating...' : 'Update'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditBrandModal;
