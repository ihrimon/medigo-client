/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import ImagePreviewer from '@/components/ui/core/CustomImageUploader/ImagePreviewer';
import CustomImageUploader from '@/components/ui/core/CustomImageUploader';
import { toast } from 'sonner';
import { updateCategory } from '@/services/category';
import { ICategory } from '@/types';

const EditCategoryModal = ({
  category,
  open,
  setOpen,
}: {
  category: ICategory;
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const [iconFiles, setIconFiles] = useState<File[]>([]);
  const [iconPreview, setIconPreview] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);

  const form = useForm({
    defaultValues: {
      name: category.name,
      items: category.items,
    },
  });


  const {
    formState: { isSubmitting },
    reset,
  } = form;

  useEffect(() => {
    if (category?.icon) {
      setIconPreview([category.icon]);
    }
    if (category?.image) {
      setImagePreview([category.image]);
    }
  }, [category]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      const formattedData = {
        ...data,
        slug: `${data.name.toLowerCase().replace(/\s+/g, '')}`,
      };
      formData.append('data', JSON.stringify(formattedData));

      if (iconFiles.length > 0) {
        formData.append('icon', iconFiles[0]);
      }
      if (imageFiles.length > 0) {
        formData.append('image', imageFiles[0]);
      }

      const res = await updateCategory(category._id, formData);

      if (res.success) {
        toast.success(res.message);
        reset();
        setOpen(false);
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='w-full max-w-2xl'>
        <div className='flex flex-col sm:flex-row gap-6'>
          {/* Icon Upload */}
          <div className='w-full flex flex-col items-center gap-3'>
            <label className='text-sm font-medium'>Upload Icon</label>
            {iconPreview.length > 0 ? (
              <ImagePreviewer
                setImageFiles={setIconFiles}
                imagePreview={iconPreview}
                setImagePreview={setIconPreview}
              />
            ) : (
              <CustomImageUploader
                setImageFiles={setIconFiles}
                setImagePreview={setIconPreview}
                label='Upload Icon (svg)'
              />
            )}
          </div>

          {/* Image Upload */}
          <div className='w-full flex flex-col items-center gap-3'>
            <label className='text-sm font-medium'>Upload Image</label>
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
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>Category Name</label>
                  <FormControl>
                    <Input {...field} placeholder='Type Category Name' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='items'
              render={({ field }) => (
                <FormItem className='mt-4'>
                  <label className='text-sm font-medium'>Items</label>
                  <FormControl>
                    <Input
                      {...field}
                      type='number'
                      placeholder='Enter number of items'
                      min={0}
                    />
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

export default EditCategoryModal;
