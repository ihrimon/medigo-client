import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryItemProps {
  icon: LucideIcon;
  title: string;
  productCount: number;
  className?: string;
}

const CategoryItem = ({
  icon: Icon,
  title,
  productCount,
  className,
}: CategoryItemProps) => {
  return (
    <div className={cn('category-item', className)}>
      <div className='category-icon-container bg-category-blue'>
        <Icon className='category-icon' />
      </div>
      <h3 className='category-title'>{title}</h3>
      <p className='category-count'>{productCount} products</p>
    </div>
  );
};

export default CategoryItem;
