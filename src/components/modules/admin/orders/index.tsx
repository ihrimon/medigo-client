'use client';

import React from 'react';
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
} from '@/components/ui/table';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { IOrder } from '@/types';
// import Image from 'next/image';
// import AddProductModal from './AddProductModal';
// import { IBrand, ICategory, IOrder, IProduct } from '@/types';
// import { Edit, Eye, Trash } from 'lucide-react';
// import QuickView from '@/components/modules/home/PopularCategories/QuickView';
// import EditProductModal from '@/components/ui/core/CustomModal/EditProductModal';
// import { deleteProduct } from '@/services/product';
// import DeleteConfirmationModal from '@/components/ui/core/CustomModal/DeleteConfirmationModal';
// import { toast } from 'sonner';
// import { deleteOrder } from '@/services/order';
// import { CartProduct } from '@/redux/features/cartSlice';

const OrderList = ({orders}: {orders: IOrder}) => {
  // const [quickViewOpen, setQuickViewOpen] = useState(false);
  // const [editModalOpen, setEditModalOpen] = useState(false);
  // const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  // const [selectedOrder, setSelectedOrder] = useState<IProduct | null>(null);

  console.log('orders', orders)

  // const handleQuickView = (product: IProduct) => {
  //   setSelectedOrder(product);
  //   setQuickViewOpen(true);
  // };

  // const handleEditProduct = (product: IProduct) => {
  //   setSelectedOrder(product);
  //   setEditModalOpen(true);
  // };

  // const handleOpenDeleteModal = (product: IProduct) => {
  //   setSelectedOrder(product);
  //   setDeleteModalOpen(true);
  // };

  // const handleDeleteProduct = async () => {
  //   if (!selectedOrder) return;

  //   try {
  //     const res = await deleteOrder(selectedOrder._id);
  //     if (res.success) {
  //       toast.success('Product deleted successfully');
  //       // You can trigger a refetch here if needed
  //     } else {
  //       toast.error(res.message || 'Failed to delete product');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast.error('Something went wrong');
  //   }
  // };

  return (
    <div className='border border-gray-100'>
      <CardHeader className='flex flex-row items-center justify-between pb-2 pt-6 px-6 mb-6'>
        <CardTitle className='text-xl font-medium text-gray-900'>
          Orders Listing
        </CardTitle>
      </CardHeader>
      <CardContent className='pb-0'>
        <div className='overflow-x-auto'>
          <Table>
            <TableHeader className='bg-green-50 py-6'>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Delivery Charge</TableHead>
                <TableHead>Amout</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            {/* <TableBody>
              {orders.map((order: IOrder) => (
                <TableRow key={order._id} className='hover:bg-gray-50'>
                  <TableCell>#{order._id.slice(-5)}</TableCell>
                  <TableCell>
                    <div>{order?.user?.name} || {order?.user?.email} || {order?.user?.photo}</div>
                  </TableCell>
                  <TableCell>{order.products._id}</TableCell>
                  <TableCell>{order.deliveryCharge}</TableCell>
                  <TableCell>{order.finalAmount}</TableCell>
                  <TableCell>{order.finalAmount}</TableCell>
                  <TableCell>{order.paymentMethod}</TableCell>
                  <TableCell>{order.createdAt}</TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
              ))}
            </TableBody> */}
          </Table>
        </div>
      </CardContent>
    </div>
  );
};

export default OrderList;
