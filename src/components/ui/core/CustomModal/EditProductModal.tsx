'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
import { toast } from 'sonner';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CustomDatePicker } from '@/components/ui/core/CustomDatePicker';
import ImagePreviewer from '@/components/ui/core/CustomImageUploader/ImagePreviewer';
import CustomImageUploader from '@/components/ui/core/CustomImageUploader';
import { format } from 'date-fns';
import { updateProduct } from '@/services/product';
import { IProduct } from '@/types';

interface EditProductModalProps {
  product: IProduct;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EditProductModal = ({
  product,
  open,
  onOpenChange,
}: EditProductModalProps) => {
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>(
    product.images || []
  );

  const form = useForm<FieldValues>({
    defaultValues: {
      name: product.name || '',
      brand: product.brand || '',
      category: product.category || '',
      price: product.price || '',
      discount: product.discount || 0,
      stock: product.stock || '',
      dosageForm: product.dosageForm || '',
      strength: product.strength?.join(', ') || '',
      prescriptionRequired: product.prescriptionRequired ? 'yes' : 'no',
      expiryDate: product.expiryDate || undefined,
      description: product.description || '',
    },
  });

  const {
    formState: { isSubmitting },
    reset,
  } = form;

  useEffect(() => {
    reset({
      name: product.name,
      brand: product.brand,
      category: product.category,
      price: product.price,
      discount: product.discount,
      stock: product.stock,
      dosageForm: product.dosageForm,
      strength: product.strength?.join(', '),
      prescriptionRequired: product.prescriptionRequired ? 'yes' : 'no',
      expiryDate: product.expiryDate ? new Date(product.expiryDate) : undefined,
      description: product.description,
    });
    setImagePreview(product.images || []);
  }, [product, reset]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      const formattedData = {
        ...data,
        price: Number(data.price),
        discount: Number(data.discount) || 0,
        discountPrice: parseFloat(
          (data.price * (1 - data.discount / 100)).toFixed(2)
        ) || 0,
        stock: Number(data.stock),
        strength: data.strength
          ? data.strength.split(',').map((item: string) => item.trim())
          : [],
        prescriptionRequired: data.prescriptionRequired === 'yes',
        expiryDate: data.expiryDate
          ? format(new Date(data.expiryDate), 'MMM dd yyyy')
          : null,
      };

      formData.append('data', JSON.stringify(formattedData));

      if (imageFiles.length > 0) {
        formData.append('images', imageFiles[0]);
      }

      console.log(formattedData)

      const res = await updateProduct(product._id, formData); 

      if (res.success) {
        toast.success('Product updated successfully');
        onOpenChange(false);
      } else {
        toast.error(res.message || 'Failed to update product');
        console.log(res.message)
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-5xl max-h-screen overflow-y-auto mt-10 py-10 pb-20'>
        <DialogHeader>
          <DialogTitle className='text-2xl mb-6 text-center'>Update Product</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            className='grid grid-cols-1 sm:grid-cols-2 gap-4'
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* Name */}
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>Product Name</label>
                  <FormControl>
                    <Input {...field} placeholder='Product name' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand */}
            <FormField
              control={form.control}
              name='brand'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>Brand</label>
                  <FormControl>
                    <Input {...field} placeholder='Brand' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Category */}
            <FormField
              control={form.control}
              name='category'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>Category</label>
                  <FormControl>
                    <Input {...field} placeholder='Category' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Price */}
            <FormField
              control={form.control}
              name='price'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>Price</label>
                  <FormControl>
                    <Input {...field} placeholder='Price' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Discount */}
            <FormField
              control={form.control}
              name='discount'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>Discount %</label>
                  <FormControl>
                    <Input {...field} placeholder='Discount' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Stock */}
            <FormField
              control={form.control}
              name='stock'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>Stock</label>
                  <FormControl>
                    <Input {...field} placeholder='Stock' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Dosage Form */}
            <FormField
              control={form.control}
              name='dosageForm'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>Dosage Form</label>
                  <FormControl>
                    <Input {...field} placeholder='Tablet/Syrup/etc.' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Strength */}
            <FormField
              control={form.control}
              name='strength'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>Strength</label>
                  <FormControl>
                    <Input {...field} placeholder='500mg, 250mg/5ml' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Prescription Required */}
            <FormField
              control={form.control}
              name='prescriptionRequired'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>
                    Prescription Required?
                  </label>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className='space-y-2'
                    >
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='yes' id='yes' />
                        <label htmlFor='yes' className='text-sm'>
                          Yes
                        </label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='no' id='no' />
                        <label htmlFor='no' className='text-sm'>
                          No
                        </label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Expiry Date */}
            <FormField
              control={form.control}
              name='expiryDate'
              render={() => (
                <FormItem>
                  <label className='text-sm font-medium'>Expiry Date</label>
                  <FormControl>
                    <CustomDatePicker
                      control={form.control}
                      name='expiryDate'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem className='sm:col-span-2'>
                  <label className='text-sm font-medium'>Description</label>
                  <FormControl>
                    <Textarea {...field} placeholder='Description' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Images */}
            <div className='sm:col-span-2'>
              <div className='flex justify-between items-center border-t border-b py-3 my-5'>
                <p className='text-primary font-bold text-xl'>Images</p>
              </div>
              <div className='flex gap-4'>
                <CustomImageUploader
                  setImageFiles={setImageFiles}
                  setImagePreview={setImagePreview}
                  label='Upload Image'
                  className='w-fit mt-0'
                />
                <ImagePreviewer
                  className='flex flex-wrap gap-4'
                  setImageFiles={setImageFiles}
                  imagePreview={imagePreview}
                  setImagePreview={setImagePreview}
                />
              </div>
            </div>

            {/* Submit */}
            <div className='sm:col-span-2 flex justify-end'>
              <Button type='submit' className='w-full'>
                {isSubmitting ? 'Updating...' : 'Update'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProductModal;
