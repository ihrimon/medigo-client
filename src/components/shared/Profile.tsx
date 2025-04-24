import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUser } from '@/context/UserContext';
import Logout from './Logout';
import { useRouter } from 'next/navigation';

export function Profile() {
  const { user } = useUser();
  const router = useRouter()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage
            src='https://res.cloudinary.com/do6tvtff8/image/upload/v1740718563/customer-8_ew6efz.jpg'
            alt='@shadcn'
          />
          <AvatarFallback>{user?.role}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuGroup>
          {user?.role === 'admin' ? (
            <>
              <DropdownMenuItem onClick={() => router.push('/admin/dashboard')}>
                Dashboard
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuItem onClick={() => router.push('/my-profile')}>
                My Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/my-orders')}>
                My Orders
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/payment-history')}>
                Payment History
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuGroup>
        <DropdownMenuItem>
          <Logout />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
