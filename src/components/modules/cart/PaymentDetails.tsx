/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Button } from '@/components/ui/button';
import { useUser } from '@/context/UserContext';
import { currencyFormatter } from '@/lib/currencyFormatter';
import {
  clearCart,
  grandTotalSelector,
  orderedProductsSelector,
  shippingCostSelector,
  subTotalSelector,
  updateShippingAddress,
} from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { createCheckoutSession } from '@/services/cart';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useState } from 'react';
import ShippingAddress, { ShippingFormData } from './ShippingAddress';
import { createPayment } from '@/services/payment';

export default function PaymentDetails() {
  const [shippingFormData, setShippingFormData] = useState<ShippingFormData>({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Bangladesh',
  });

  const subTotal = useAppSelector(subTotalSelector);
  const shippingCost = useAppSelector(shippingCostSelector);
  const grandTotal = useAppSelector(grandTotalSelector);
  // const order = useAppSelector(orderSelector);
  const cartProducts = useAppSelector(orderedProductsSelector);

  console.log(shippingFormData)

  const user = useUser();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleOrder = async () => {
    try {
      if (!user.user) {
        router.push('/login');
        throw new Error('Please login to continue.');
      }

      const { street, city, state, zipCode, country } = shippingFormData;
      if (!street || !city || !state || !zipCode || !country) {
        throw new Error('Please fill all required shipping fields.');
      } else {
        dispatch(updateShippingAddress(shippingFormData));
      }

      if (cartProducts.length === 0) {
        throw new Error('Your cart is empty.');
      }

      // order create
      // const orderResponse = await createOrder(order);

      // if (!orderResponse.success) {
      //   throw new Error(orderResponse.message);
      // }

      // const createdOrder = orderResponse.data;
      // console.log(createdOrder, 'create order')
      // toast.success(orderResponse.message);

      // create payment data
      const paymentData = {
        user: user?.user?.userId,
        order: user?.user?.userId,
        amount: grandTotal,
        currency: 'BDT',
        status: 'pending',
      };

      // create payment history
      await createPayment(paymentData);

      // start stripe sesssion
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!
      );
      const session = await createCheckoutSession(cartProducts);

      if (session?.sessionId) {
        await stripe?.redirectToCheckout({ sessionId: session.sessionId });
        dispatch(clearCart());
      } else {
        throw new Error('Unable to initiate payment session.');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className='space-y-5'>
      <ShippingAddress onChange={setShippingFormData} />
      <div className='border border-gray-200 bg-white rounded-md shadow p-6'>
        <h2 className='text-xl font-semibold mb-4'>Payment Summary</h2>
        <div className='space-y-2'>
          <div className='flex justify-between text-gray-700'>
            <span>Subtotal</span>
            <span>{currencyFormatter(subTotal)}</span>
          </div>
          <div className='flex justify-between text-gray-700'>
            <span>Shipping</span>
            <span>{currencyFormatter(shippingCost)}</span>
          </div>
          <hr className='my-2' />
          <div className='flex justify-between font-bold text-lg'>
            <span>Total</span>
            <span>{currencyFormatter(grandTotal)}</span>
          </div>
        </div>
        <Button onClick={handleOrder} className='w-full mt-6 text-lg py-4'>
          Place Order
        </Button>
      </div>
    </div>
  );
}
