import Image from 'next/image';
import Link from 'next/link';
import logo from '../../app/assets/logo.png';

const Logo = () => {
  return (
    <Link href={'/'} className='flex items-center gap-2'>
      <Image src={logo} width={100} height={100} alt='logo' />
      <p className='text-xl font-medium text-blue-500'>
        Medi<span className='text-teal-500'>Go</span>
      </p>
    </Link>
  );
}

export default Logo