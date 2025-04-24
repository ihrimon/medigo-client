/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getMyPaymentHistory } from '@/services/payment'; // updated function name
import { useUser } from '@/context/UserContext';
import { toast } from 'sonner';

interface IPayment {
  _id: string;
  order: {
    deliveryCharge: number;
    finalAmount: number;
    shippingAddress: string;
  };
  user: {
    name: string;
    email: string;
    role: string;
  };
  amount: number;
  currency: string;
  transactionId: string;
  status: string;
  createdAt: string;
}

const PaymentHistoryPage = () => {
  const [payments, setPayments] = useState<IPayment[]>([]);
  const { user, setIsLoading } = useUser();

  useEffect(() => {
    const fetchPayments = async () => {
      if (!user) return;

      try {
        setIsLoading(true);
        const res = await getMyPaymentHistory(user.userId);
        console.log(res.data) 
        if (res?.success) {
          setPayments(res.data); 
        } else {
          throw new Error(res?.message || 'Could not fetch payment history.');
        }
      } catch (error: any) {
        toast.error(error.message || 'Failed to fetch payment history.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPayments();
  }, [user, setIsLoading]);

  return (
    <div className='space-y-6 max-w-7xl mx-auto'>
      <div>
        <h1 className='text-3xl font-bold tracking-tight'>Payment History</h1>
        <p className='text-muted-foreground'>
          View your payment history and transaction details.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment: IPayment) => (
                <TableRow key={payment._id}>
                  <TableCell className='font-medium'>{payment.transactionId}</TableCell>
                  <TableCell>
                    {new Date(payment.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {payment.currency} {(payment.amount).toFixed(2)}
                  </TableCell>
                  <TableCell>{payment.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentHistoryPage;
