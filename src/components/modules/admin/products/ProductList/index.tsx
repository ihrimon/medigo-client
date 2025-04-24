'use client';

import React, { useState } from 'react';
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
import AddProductModal from './AddProductModal';
import { IBrand, ICategory, IProduct } from '@/types';
import { Edit, Eye, Trash } from 'lucide-react';
import QuickView from '@/components/modules/home/PopularCategories/QuickView';
import EditProductModal from '@/components/ui/core/CustomModal/EditProductModal';
import { deleteProduct } from '@/services/product';
import DeleteConfirmationModal from '@/components/ui/core/CustomModal/DeleteConfirmationModal';
import { toast } from 'sonner';

interface IProductListProps {
  products: IProduct[],
  categories: ICategory[],
  brands: IBrand[],
}

const ProductList = ({products, categories, brands}: IProductListProps) => {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const handleQuickView = (product: IProduct) => {
    setSelectedProduct(product);
    setQuickViewOpen(true);
  };

  const handleEditProduct = (product: IProduct) => {
    setSelectedProduct(product);
    setEditModalOpen(true);
  };

  const handleOpenDeleteModal = (product: IProduct) => {
    setSelectedProduct(product);
    setDeleteModalOpen(true);
  };

  const handleDeleteProduct = async () => {
    if (!selectedProduct) return;

    try {
      const res = await deleteProduct(selectedProduct._id);
      if (res.success) {
        toast.success('Product deleted successfully');
        // You can trigger a refetch here if needed
      } else {
        toast.error(res.message || 'Failed to delete product');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <div className='border border-gray-100'>
      <CardHeader className='flex flex-row items-center justify-between pb-2 pt-6 px-6 mb-6'>
        <CardTitle className='text-xl font-medium text-gray-900'>
          Product Listing
        </CardTitle>
        <AddProductModal categories={categories} brands={brands} />
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
              {products.map((product: IProduct) => (
                <TableRow key={product._id} className='hover:bg-gray-50'>
                  <TableCell>#{product._id.slice(-5)}</TableCell>
                  <TableCell className='py-4'>
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center justify-center h-12 w-12 p-2 rounded-full bg-green-50'>
                        <Image
                          width={100}
                          height={100}
                          src={product.images[0]}
                          alt={product.name}
                          className='h-10 w-10 object-cover'
                        />
                      </div>
                      <div>
                        <div className='font-medium'>{product.name}</div>
                        <div className='text-sm text-gray-500'>
                          {product.dosageForm} | {product.strength[0]}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    {product.prescriptionRequired ? 'Required' : 'Non-required'}
                  </TableCell>
                  <TableCell>{product.expiryDate}</TableCell>
                  <TableCell>
                    {product.isActive ? (
                      <div className='text-green-500 flex items-center gap-1'>
                        Active
                      </div>
                    ) : (
                      'Inactive'
                    )}
                  </TableCell>
                  <TableCell>
                    <div className='flex items-center gap-3'>
                      <button
                        className='p-1 rounded hover:bg-gray-100 cursor-pointer'
                        onClick={() => handleQuickView(product)}
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        className='p-1 rounded hover:bg-gray-100 cursor-pointer'
                        onClick={() => handleEditProduct(product)}
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        className='p-1 rounded hover:bg-gray-100 cursor-pointer'
                        onClick={() => handleOpenDeleteModal(product)}
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      {/* Quick View Modal */}
      {selectedProduct && (
        <QuickView
          product={selectedProduct}
          open={quickViewOpen}
          onOpenChange={setQuickViewOpen}
        />
      )}

      {/* Edit Modal */}
      {selectedProduct && (
        <EditProductModal
          product={selectedProduct}
          open={editModalOpen}
          onOpenChange={setEditModalOpen}
        />
      )}

      {/* Delete Confirmation Modal */}
      {selectedProduct && (
        <DeleteConfirmationModal
          name={selectedProduct.name}
          isOpen={deleteModalOpen}
          onOpenChange={setDeleteModalOpen}
          onConfirm={() => {
            handleDeleteProduct();
            setDeleteModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default ProductList;
