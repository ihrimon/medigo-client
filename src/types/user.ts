export interface IUser {
  userId: string;
  name: string;
  email: string;
  isActive?: boolean;
  role: 'customer' | 'admin';
  iat?: number;
  exp?: number;
}

export interface IAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface ICustomer {
  _id: string;
  user: IUser;
  fullName: string;
  username: string;
  email: string;
  phone?: string;
  profileImage?: string;
  occupation?: string;
  bio?: string;
  gender?: string;
  birthDate?: Date;
  address: IAddress;
  status: string;
  registrationDate?: string;
}
