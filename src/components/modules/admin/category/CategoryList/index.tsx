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
import { ICategory } from '@/types';
import { Edit, Trash } from 'lucide-react';
import DeleteConfirmationModal from '@/components/ui/core/CustomModal/DeleteConfirmationModal';
import { toast } from 'sonner';
import AddCategoryModal from './AddCategoryModal';
import EditCategoryModal from '@/components/ui/core/CustomModal/EditCategoryModal';
import { deleteCategory } from '@/services/category';

const CategoryList = ({ categories }: { categories: ICategory[] }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(null);
  // console.log(categories.length)

  const handleEditCategory = (category: ICategory) => {
    setSelectedCategory(category);
    setEditModalOpen(true);
  };

  const handleOpenDeleteModal = (category: ICategory) => {
    setSelectedCategory(category);
    setDeleteModalOpen(true);
  };

  const handleDeleteProduct = async () => {
    if (!selectedCategory) return;

    try {
      const res = await deleteCategory(selectedCategory._id);
      if (res.success) {
        toast.success('Category deleted successfully');
      } else {
        toast.error(res.message || 'Failed to delete category');
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
          Categories Listing
        </CardTitle>
        <AddCategoryModal />
      </CardHeader>
      <CardContent className='pb-0'>
        <div className='overflow-x-auto'>
          <Table>
            <TableHeader>
              <TableRow className='hover:bg-transparent'>
                <TableHead className='w-[80px]'>ID</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category: ICategory) => (
                <TableRow key={category._id} className='hover:bg-gray-50'>
                  <TableCell>#{category._id.slice(-5)}</TableCell>
                  <TableCell className='py-4'>
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center justify-center h-14 w-14 p-2'>
                        <Image
                          width={100}
                          height={100}
                          src={category.image}
                          alt={category.name}
                          className='p-1 object-cover'
                        />
                      </div>
                      <div className='font-medium'>{category.name}</div>
                    </div>
                  </TableCell>
                  <TableCell>{category.slug}</TableCell>
                  <TableCell>{category.items}</TableCell>
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
                        onClick={() => handleEditCategory(category)}
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        className='p-1 rounded hover:bg-gray-100 cursor-pointer'
                        onClick={() => handleOpenDeleteModal(category)}
                      >
                        <Trash size={16} className='text-red-500 hover:text-red-600' />
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
      {selectedCategory && (
        <EditCategoryModal
          category={selectedCategory}
          open={editModalOpen}
          setOpen={setEditModalOpen}
        />
      )}

      {/* Delete Confirmation Modal */}
      {selectedCategory && (
        <DeleteConfirmationModal
          name={selectedCategory.name}
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

export default CategoryList;
