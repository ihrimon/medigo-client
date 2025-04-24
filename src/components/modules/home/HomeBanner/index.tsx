'use client';

import Image from 'next/image';
import styles from './HeroSection.module.css';
import logo from '../../../../app/assets/logo.png';
import { navLinks } from '@/constants/navbar';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import banner from '../../../../app/assets/1.png';
import { Input } from '@/components/ui/input';
import { ArrowRight, Heart, ShoppingCart, WandSparkles } from 'lucide-react';
import { BorderTrail } from '../../../../../components/motion-primitives/border-trail';
import { useUser } from '@/context/UserContext';
import { Profile } from '@/components/shared/Profile';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import { orderedProductsSelector } from '@/redux/features/cartSlice';

const HomeBanner = () => {
  const {user} = useUser();
  const router = useRouter();

  const cartProducts = useAppSelector(orderedProductsSelector);
  const cartCount = cartProducts?.length || 0;

  return (
    <div className={`${styles.banner}`}>
      <nav className='flex justify-between items-center py-5 max-w-7xl mx-auto'>
        <Link href={'/'} className='flex items-center gap-2'>
          <Image src={logo} width={100} height={100} alt='logo' />
          <p className='text-xl font-medium text-blue-500'>
            Medi<span className='text-teal-500'>Go</span>
          </p>
        </Link>
        <div>
          <ul className='flex items-center justify-evenly gap-5'>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center gap-3 relative'>
          {/* Shopping Cart Button */}
          <button onClick={() => router.push('/cart')} className='relative'>
            <ShoppingCart size={24} />

            {cartCount > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full'>
                {cartCount}
              </span>
            )}
          </button>
          
          {user !== null ? (
            <Profile />
          ) : (
            <div>
              <Link href={'/login'}>
                <div className='relative inline-flex items-center justify-center rounded-full'>
                  <BorderTrail
                    style={{
                      boxShadow:
                        '0 0 20px 4px rgba(59,130,246,0.6), 0 0 40px 8px rgba(139,92,246,0.5), 0 0 60px 12px rgba(255,255,255,0.4)',
                    }}
                    size={120}
                  />
                  <Button
                    className='
              z-10 relative px-6 py-3 rounded-full font-medium
              bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
              text-white shadow-lg
              transition-all duration-500 ease-in-out
              hover:brightness-110 hover:scale-105
              '
                  >
                    <WandSparkles className='w-4 h-4 ' />
                    Login
                  </Button>
                </div>
              </Link>
            </div>
          )}
        </div>
      </nav>
      <div className='max-w-7xl mx-auto flex items-center justify-between gap-6 my-10'>
        <div>
          <div className='bg-lime-100 rounded-full px-5 py-1 inline-block text-sm text-lime-500'>
            <p>Medical Center</p>
          </div>
          <h1 className='text-5xl font-extrabold leading-tight my-5 text-gray-600'>
            One Click Away <br />
            From Better Health <br />
            <span className='text-blue-500'>MediGo</span> Shop Online
          </h1>
          <p className='w-2/3 leading-relaxed'>
            To become the most trusted and accessible digital pharmacy platform,
            ensuring every individual can conveniently access quality medicines
            and healthcare products—anytime, anywhere.
          </p>
          <div className='w-[260px] flex items-center relative mt-10'>
            <Input
              placeholder='  Find the best medicine here'
              className='py-6 rounded-full bg-white px-3 border border-blue-500'
            ></Input>
            <Button className='absolute right-[-4px] w-12 h-12 rounded-full bg-blue-500'>
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className='mr-12'>
          <Image src={banner} height={800} width={800} alt='banner image' />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
