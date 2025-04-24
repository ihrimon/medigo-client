// app/(dashboard)/my-orders/page.tsx বা অন্য কোনো server component ফাইলে

'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'; 
import { IOrder } from '@/types';


const MyOrdersTable = ({orders}: {orders: IOrder[]}) => {
  console.log(orders)

  return (
    <div className='space-y-6 max-w-7xl mx-auto'>

      <Card>
        <CardHeader>
          <CardTitle>My Order List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders?.map((order: IOrder) => (
                <TableRow key={order._id}>
                  <TableCell className='font-medium'>{order._id}</TableCell>
                  <TableCell>
                    {new Date(order.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <ul className='list-disc pl-4'>
                      {order.products?.map((item, index) => (
                        <li key={index}>
                          {item.product.name} × {item.quantity}
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell>${order.finalAmount.toFixed(2)}</TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyOrdersTable;
