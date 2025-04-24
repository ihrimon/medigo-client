'use client';

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { ICustomer } from '@/types';

const CustomerList = ({customers}: {customers: ICustomer[]}) => {
//   const [quickViewOpen, setQuickViewOpen] = useState(false);
//   const [editModalOpen, setEditModalOpen] = useState(false);
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

//   const handleQuickView = (product: IProduct) => {
//     setSelectedProduct(product);
//     setQuickViewOpen(true);
//   };

//   const handleEditProduct = (product: IProduct) => {
//     setSelectedProduct(product);
//     setEditModalOpen(true);
//   };

//   const handleOpenDeleteModal = (product: IProduct) => {
//     setSelectedProduct(product);
//     setDeleteModalOpen(true);
//   };

//   const handleDeleteProduct = async () => {
//     if (!selectedProduct) return;

//     try {
//       const res = await deleteProduct(selectedProduct._id);
//       if (res.success) {
//         toast.success('Product deleted successfully');
//         // You can trigger a refetch here if needed
//       } else {
//         toast.error(res.message || 'Failed to delete product');
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error('Something went wrong');
//     }
//   };

  return (
    <div className='border border-gray-100'>
      <CardHeader className='flex flex-row items-center justify-between pb-2 pt-6 px-6 mb-6'>
        <CardTitle className='text-xl font-medium text-gray-900'>
          Customers Listing
        </CardTitle>
      </CardHeader>
      <CardContent className='pb-0'>
        <div className='overflow-x-auto'>
          <Table>
            <TableHeader className='bg-green-50 py-6'>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Prescription</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer: ICustomer) => (
                <TableRow key={customer._id} className='hover:bg-gray-50'>
                  <TableCell>#{customer._id.slice(-5)}</TableCell>
                  <TableCell className='py-4'>
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center justify-center h-12 w-12 p-2 rounded-full bg-green-50'>
                        <Image
                          width={100}
                          height={100}
                          src={customer.profileImage}
                          alt={customer.user.name}
                          className='h-10 w-10 object-cover'
                        />
                      </div>
                      
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </div>
  );
};

export default CustomerList;
