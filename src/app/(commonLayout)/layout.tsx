'use client'

import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { usePathname } from 'next/navigation';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <>
      {pathname && pathname !== '/' && <Navbar />}
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
