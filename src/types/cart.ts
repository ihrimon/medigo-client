export interface IOrder {
  _id: string;
  products: { product: string; quantity: number }[];
  shippingAddress: string;
  paymentMethod: string;
}
