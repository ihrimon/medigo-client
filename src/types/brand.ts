export interface IBrand {
  _id: string;
  name: string;
  logo: string;
  image: string;
  established: number;
  country: string;
  stores: number;
  products: number;
  slug: string;
  tagline: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
