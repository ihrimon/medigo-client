'use client';

import { Heart, ShoppingCart, WandSparkles } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { navLinks } from '@/constants/navbar';
import { BorderTrail } from '../../../components/motion-primitives/border-trail';
import Logo from './Logo';
import { useUser } from '@/context/UserContext';
import { Profile } from './Profile';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { orderedProductsSelector } from '@/redux/features/cartSlice';

const Navbar = () => {
  const { user } = useUser();
    const router = useRouter();
  
    const cartProducts = useAppSelector(orderedProductsSelector);
    const cartCount = cartProducts?.length || 0;

  return (
    <nav className='flex justify-between items-center py-4 max-w-7xl mx-auto'>
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
  );
};

export default Navbar;
