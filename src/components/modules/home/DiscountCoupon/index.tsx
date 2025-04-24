import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

const DiscountCoupon = () => {
  return (
    <div
      className='relative w-full max-w-5xl mx-auto bg-cover bg-center rounded-2xl p-8 text-white'
      style={{ backgroundImage: "url('../../../../app/assets/banner.jpg')" }}
    >
      <div className='absolute inset-0 bg-black/50 rounded-2xl'></div>

      <div className='relative z-10 text-center'>
        <h2 className='text-2xl font-bold'>
          GET <span className='text-yellow-400'>20% OFF</span> DISCOUNT COUPON
        </h2>
        <p className='mt-2 text-lg text-gray-300'>
          by subscribing to our newsletter
        </p>

        <div className='mt-5 flex items-center justify-center'>
          <div className='relative w-full max-w-md'>
            <Input
              type='email'
              placeholder='Your Email Address'
              className='w-full pl-4 pr-20 py-3 text-gray-800 rounded-full'
            />
            <Button className='absolute right-1 top-1 bottom-1 px-5 bg-teal-500 hover:bg-teal-600 text-white flex items-center rounded-full'>
              Subscribe <Send className='w-4 h-4 ml-2' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountCoupon;
