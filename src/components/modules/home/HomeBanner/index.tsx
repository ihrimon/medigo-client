'use client';

import Image from 'next/image';
import styles from './HeroSection.module.css';
import { navLinks } from '@/constants/navbar';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import banner from '../../../../app/assets/1.png';
import { ArrowRight, ShoppingCart, WandSparkles } from 'lucide-react';
import { useUser } from '@/context/UserContext';
import { Profile } from '@/components/shared/Profile';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import { orderedProductsSelector } from '@/redux/features/cartSlice';
import Logo from '@/components/shared/Logo';

const HomeBanner = () => {
  const {user} = useUser();
  const router = useRouter();

  const cartProducts = useAppSelector(orderedProductsSelector);
  const cartCount = cartProducts?.length || 0;

  return (
    <div className={`${styles.banner}`}>
      <nav className='flex justify-between items-center py-5 max-w-7xl mx-auto'>
        <Logo />
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
                  <Button
                    className='
              z-10 relative px-6 py-3 rounded-full font-medium
              bg-gradient-to-r from-blue-500 via-lime-500 to-green-500
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
          <div className='mt-10'>
            <Link href={'/products'}>
              <Button className='px-6 bg-green-500 hover:bg-blue-500'>
                Shopping Now <ArrowRight />
              </Button>
            </Link>
            <div />
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
