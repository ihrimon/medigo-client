'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface ICustomImageUploader {
  label?: string;
  className?: string;
  setImageFiles: React.Dispatch<React.SetStateAction<File[]>>;
  setImagePreview: React.Dispatch<React.SetStateAction<string[]>>;
}

const CustomImageUploader = ({
  label = 'Upload Images',
  className,
  setImageFiles,
  setImagePreview,
}: ICustomImageUploader) => {
    
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];

    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview((prev) => [...prev, reader.result as string]);
      };

      reader.readAsDataURL(file);
    }

    event.target.value = '';
  };

  return (
    <div className={cn('flex flex-col items-center w-full', className)}>
      <Input
        id='image-upload'
        type='file'
        accept='image/*'
        multiple
        className='hidden'
        onChange={handleImageChange}
      />
      <label
        htmlFor='image-upload'
        className='w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300/20 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 hover:dark:bg-gray-900 transition'
      >
        {label}
      </label>
    </div>
  );
};

export default CustomImageUploader;
