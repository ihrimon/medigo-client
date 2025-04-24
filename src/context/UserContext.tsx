import { getCurrentUser } from '@/services/auth';
import { getSingleCustomer } from '@/services/customer';
import { ICustomer, IUser } from '@/types';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

interface IUserProviderValues {
  user: IUser | null;
  customer: ICustomer | null;
  isLoading: boolean;
  setUser: (user: IUser | null) => void;
  setCustomer: (customer: ICustomer | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<IUserProviderValues | undefined>(undefined);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [customer, setCustomer] = useState<ICustomer | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    const user = await getCurrentUser();
    setUser(user);

    if (user?.userId) {
      const { data } = await getSingleCustomer(user.userId);
      setCustomer(data);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]);

  return (
    <UserContext.Provider
      value={{ user, setUser, customer, setCustomer, isLoading, setIsLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within the UserProvider context');
  }

  return context;
};

// ✅ নতুন হুক তৈরি: useCustomer
export const useCustomer = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useCustomer must be used within the UserProvider context');
  }

  return {
    customer: context.customer,
    setCustomer: context.setCustomer,
  };
};

export default UserProvider;
