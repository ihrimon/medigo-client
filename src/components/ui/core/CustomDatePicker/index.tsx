/* eslint-disable @typescript-eslint/no-explicit-any */

import { Controller } from 'react-hook-form';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '../../calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../../popover';
import { Input } from '../../input';

interface CustomDatePickerProps {
  control: any;
  name: string;
}

export const CustomDatePicker = ({ control, name }: CustomDatePickerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Popover>
          <PopoverTrigger asChild>
            <div className='relative cursor-pointer'>
              <Input
                readOnly
                value={
                  field.value instanceof Date && !isNaN(field.value.getTime())
                    ? format(field.value, 'MMM dd, yyyy')
                    : ''
                }
                placeholder='Pick a date'
                className='cursor-pointer'
              />
              <CalendarIcon className='absolute right-3 top-2.5 h-4 w-4 text-muted-foreground' />
            </div>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0' align='start'>
            <Calendar
              mode='single'
              selected={field.value}
              onSelect={field.onChange}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      )}
    />
  );
};
