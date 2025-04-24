'use client';

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';
import { cities } from '@/constants';
import { useAppDispatch } from '@/redux/hooks';
import { updateShippingAddress } from '@/redux/features/cartSlice';

export interface ShippingFormData {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

const ShippingAddress = ({
  onChange,
}: {
  onChange: (data: ShippingFormData) => void;
}) => {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<ShippingFormData>({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Bangladesh',
  });

  useEffect(() => {
    onChange(form);
    dispatch(updateShippingAddress(form)); 
  }, [form, onChange, dispatch]);

  return (
    <Card className='p-6 bg-gray-50'>
      <h2 className='font-semibold text-lg mb-4'>Shipping Address</h2>
      <div className='space-y-4'>
        <Select
          value={form.country}
          onValueChange={(val) => setForm({ ...form, country: val })}
        >
          <SelectTrigger>
            <SelectValue placeholder='Select Country' />
          </SelectTrigger>
          <SelectContent>
            {[
              'Bangladesh',
              'India',
              'Pakistan',
              'United States',
              'United Kingdom',
            ].map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          placeholder='Street Address'
          value={form.street}
          onChange={(e) => setForm({ ...form, street: e.target.value })}
        />
        <Select
          value={form.city}
          onValueChange={(val) => setForm({ ...form, city: val })}
        >
          <SelectTrigger>
            <SelectValue placeholder='Select City' />
          </SelectTrigger>
          <SelectContent>
            {cities.map((cityName) => (
              <SelectItem key={cityName} value={cityName}>
                {cityName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          placeholder='State'
          value={form.state}
          onChange={(e) => setForm({ ...form, state: e.target.value })}
        />
        <Input
          placeholder='Zip Code'
          value={form.zipCode}
          onChange={(e) => setForm({ ...form, zipCode: e.target.value })}
        />
      </div>
    </Card>
  );
};

export default ShippingAddress;
