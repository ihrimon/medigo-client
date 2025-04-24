/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { toast } from 'sonner';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CustomDatePicker } from '@/components/ui/core/CustomDatePicker';
import { addProduct } from '@/services/product';
import { format } from 'date-fns';
import { IBrand, ICategory } from '@/types';
import { addProductSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';

interface IAddProductModalProps {
  categories: ICategory[];
  brands: IBrand[];
}

const AddProductModal = ({ categories, brands }: IAddProductModalProps) => {
  const [open, setOpen] = useState(false);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [imageRequiredError, setImageRequiredError] = useState<string | null>(
    null
  );

  const form = useForm({
    resolver: zodResolver(addProductSchema),
  });
  const {
    formState: { isSubmitting },
    reset,
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      if (imageFiles.length === 0) {
        setImageRequiredError('Image is required');
        return;
      } else {
        setImageRequiredError(null);
      }
      const formData = new FormData();
      const formattedData = {
        ...data,
        slug: `${data.name.toLowerCase()}`,
        price: Number(data.price),
        discount: Number(data.discount),
        discountPrice: parseFloat(
          (data.price * (1 - data.discount / 100)).toFixed(2)
        ),
        stock: Number(data.stock),
        // strength:
        //   typeof data.strength === 'string' && data.strength.trim()
        //     ? data.strength.split(',').map((item: string) => item.trim())
        //     : [],

        prescriptionRequired:
          data.prescriptionRequired === 'yes' ? true : false,
        expiryDate: data.expiryDate
          ? format(new Date(data.expiryDate), 'MMM dd yyyy')
          : null,
      };
      formData.append('data', JSON.stringify(formattedData));

      if (imageFiles.length > 0) {
        formData.append('images', imageFiles[0]);
      }

      console.log(formattedData);

      const res = await addProduct(formData);
      console.log('response', res);

      if (res.success) {
        toast.success(res.message);
        reset();
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
        <Button size='sm' onClick={() => setOpen(true)}>
          Add Product <Plus className='h-4 w-4 ml-1' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-4xl max-h-screen overflow-y-auto my-14 pb-20'>
        <DialogHeader>
          <DialogTitle className='text-center mb-6 mt-6 text-2xl'>
            Create Product
          </DialogTitle>
        </DialogHeader>

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
                  <label className='text-sm font-medium'>Product Name</label>
                  <FormControl>
                    <Input {...field} placeholder='Product name' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='brand'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>Brand Name</label>
                  <FormControl>
                    <select {...field} className='border rounded-md p-2 w-full'>
                      <option value=''>Select Brand</option>
                      {brands.map((brand: IBrand) => (
                        <option key={brand._id} value={brand.name}>
                          {brand.name}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='category'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>Category Name</label>
                  <FormControl>
                    <select {...field} className='border rounded-md p-2 w-full'>
                      <option value=''>Select Category</option>
                      {categories.map((category: ICategory) => (
                        <option key={category._id} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='price'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>Product Price</label>
                  <FormControl>
                    <Input {...field} placeholder='Product Price here' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='discount'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>Discount %</label>
                  <FormControl>
                    <Input {...field} placeholder='Discount percentage' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='stock'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>Total Stock</label>
                  <FormControl>
                    <Input {...field} placeholder='Total Stock' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='dosageForm'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>Dosage Form</label>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='Tablet, Syrup, Injection, etc.'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <FormField
              control={form.control}
              name='strength'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-medium'>
                    Medicine strength
                  </label>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder=' Medicine strength (e.g., 500mg, 250mg/5ml)'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

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
                      onValueChange={(value) => field.onChange(value === 'yes')}
                      value={field.value ? 'yes' : 'no'}
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

            <FormField
              control={form.control}
              name='expiryDate'
              render={({ field }) => (
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

            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem className='sm:col-span-2'>
                  <label className='text-sm font-medium'>
                    Product Description
                  </label>
                  <FormControl>
                    <Textarea {...field} placeholder='Brand Description' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Image Upload Section */}
            <div>
              <div className='flex justify-between items-center border-t border-b py-3 my-5'>
                <p className='text-primary font-bold text-xl'>Images</p>
              </div>
              <div className='flex gap-4 '>
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
              {imageRequiredError && (
                <p className='text-sm text-red-500 mt-2 ml-1'>
                  {imageRequiredError}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className='sm:col-span-2 flex justify-end'>
              <Button type='submit' className='w-full'>
                {isSubmitting ? 'Creating...' : 'Create'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductModal;
