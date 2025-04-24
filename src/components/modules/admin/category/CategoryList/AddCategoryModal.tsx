/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Plus } from 'lucide-react';
import ImagePreviewer from '@/components/ui/core/CustomImageUploader/ImagePreviewer';
import CustomImageUploader from '@/components/ui/core/CustomImageUploader';
import { toast } from 'sonner';
import { createCategory } from '@/services/category';
import { zodResolver } from '@hookform/resolvers/zod';
import { addCategorySchema } from '@/schemas/categories';

const AddCategoryModal = () => {
  const [open, setOpen] = useState(false);
  const [iconFiles, setIconFiles] = useState<File[]>([]);
  const [IconPreview, setIconPreview] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);

  const form = useForm({
    resolver: zodResolver(addCategorySchema)
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
        slug: `${data.name.toLowerCase().replace(/\s+/g, '')}`,
      };
      formData.append('data', JSON.stringify(formattedData));

      if (iconFiles.length > 0) {
        formData.append('icon', iconFiles[0]);
      }
      if (imageFiles.length > 0) {
        formData.append('image', imageFiles[0]);
      }

      const res = await createCategory(formData);

      if (res.success) {
        toast.success(res.message);
        reset();
        setIconFiles([]);
        setIconPreview([]);
        setImageFiles([]);
        setImagePreview([]);
        setOpen(false); 
      } else {
        toast.error(res.message);
        console.log(res.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size='sm' onClick={() => setOpen(true)}>
          Add Category <Plus className='h-4 w-4 ml-1' />
        </Button>
      </DialogTrigger>
      <DialogContent className='w-full max-w-2xl'>
        {/* Image Upload Section */}
        <div className='flex flex-col sm:flex-row gap-6'>
          {/* Logo Upload */}
          <div className='w-full flex flex-col items-center gap-3'>
            <label className='text-sm font-medium'>Upload Logo</label>
            {IconPreview.length > 0 ? (
              <ImagePreviewer
                setImageFiles={setIconFiles}
                imagePreview={IconPreview}
                setImagePreview={setIconPreview}
              />
            ) : (
              <CustomImageUploader
                setImageFiles={setIconFiles}
                setImagePreview={setIconPreview}
                label='Upload Icon (svg)'
              />
            )}
            {/* Show validation error if no icon is uploaded */}
            {form.formState.isSubmitted && iconFiles.length === 0 && (
              <p className='text-sm text-red-500'>Icon is required</p>
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
            {/* Show validation error if no image is uploaded */}
            {form.formState.isSubmitted && imageFiles.length === 0 && (
              <p className='text-sm text-red-500'>Image is required</p>
            )}
          </div>
        </div>

        {/* Form Section */}
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

            {/* Submit Button */}
            <div className='sm:col-span-2 flex justify-end mt-4'>
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

export default AddCategoryModal;
