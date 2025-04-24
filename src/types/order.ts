import { IProduct } from './product';

export interface IOrder {
  _id?: string;
  user: {
    name: string;
    email: string;
    role: string;
    status: string;
    _id: string;
  };
  products: {
    _id: string;
    product: IProduct
    quantity: number;
  }[];
  deliveryCharge: number;
  status: string;
  shippingAddress: string;
  paymentMethod: string;
  subTotal: number;
  finalAmount: number;
  createdAt: string;
  updatedAt: string;
}
