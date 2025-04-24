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
import { IBrand } from '@/types';
import { Edit, Trash } from 'lucide-react';
import DeleteConfirmationModal from '@/components/ui/core/CustomModal/DeleteConfirmationModal';
import { toast } from 'sonner';
import EditBrandModal from '@/components/ui/core/CustomModal/EditBrandModal';
import { deleteBrand } from '@/services/brand';
import AddBrandModal from '../AddBrandModal';

const BrandList = ({ brands }: { brands: IBrand[] }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<IBrand | null>(null);

const handleEditBrand = (brand: IBrand) => {
  setSelectedBrand(brand); 
  setEditModalOpen(true);
};

  const handleOpenDeleteModal = (brand: IBrand) => {
    setSelectedBrand(brand);
    setDeleteModalOpen(true);
  };

  const handleDeleteProduct = async () => {
    if (!selectedBrand) return;

    try {
      const res = await deleteBrand(selectedBrand._id);
      if (res.success) {
        toast.success('Product deleted successfully');
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
      <CardHeader className='flex flex-row items-center justify-between pb-2 pt-6 px-6'>
        <CardTitle className='text-xl font-medium text-gray-900'>
          Brands Listing
        </CardTitle>
        <AddBrandModal />
      </CardHeader>
      <CardContent className='pb-0'>
        <div className='overflow-x-auto'>
          <Table>
            <TableHeader>
              <TableRow className='hover:bg-transparent'>
                <TableHead className='w-[80px]'>ID</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Tagline</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {brands.map((brand: IBrand) => (
                <TableRow key={brand._id} className='hover:bg-gray-50'>
                  <TableCell>#{brand._id.slice(-5)}</TableCell>
                  <TableCell className='py-4'>
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center justify-center h-14 w-14 p-2'>
                        <Image
                          width={200}
                          height={200}
                          src={brand.image}
                          alt={brand.name}
                          className='p-1 object-cover'
                        />
                      </div>
                      <div className='font-medium'>{brand.name}</div>
                    </div>
                  </TableCell>
                  <TableCell>{brand.slug}</TableCell>
                  <TableCell>{brand.tagline}</TableCell>
                  <TableCell>
                    {' '}
                    <span className='text-green-500 flex items-center gap-1'>
                      Active
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className='flex items-center gap-3'>
                      <button
                        className='p-1 rounded hover:bg-gray-100 cursor-pointer'
                        onClick={() => handleEditBrand(brand)}
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        className='p-1 rounded hover:bg-gray-100 cursor-pointer'
                        onClick={() => handleOpenDeleteModal(brand)}
                      >
                        <Trash
                          size={16}
                          className='text-red-500 hover:text-red-600'
                        />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      {/* Edit Modal */}
      {selectedBrand && (
        <EditBrandModal
          brand={selectedBrand}
          open={editModalOpen}
          onOpenChange={setEditModalOpen}
        />
      )}

      {/* Delete Confirmation Modal */}
      {selectedBrand && (
        <DeleteConfirmationModal
          name={selectedBrand.name}
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

export default BrandList;
