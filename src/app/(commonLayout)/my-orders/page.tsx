// app/(dashboard)/my-orders/page.tsx

// import MyOrdersTable from '@/components/modules/customer/my-orders/MyOrdersTable';
import MyOrdersTable from '@/components/modules/customer/my-orders/MyOrdersTable';
import { getMyOrders } from '@/services/order';

const MyOrdersPage = async () => {
  const {data: orderData} = await getMyOrders();
  const orders = orderData?.data;

  return (
    <div className='space-y-6 max-w-7xl mx-auto'>
      <h1 className='text-3xl font-bold text-center'>My Orders</h1>
      {orders.length === 0 ? (
        <p className='text-red-500 my-10 text-center'>You dont have orders, please Order your products</p>
      ) : (
        <MyOrdersTable orders={orders} />
      )}
    </div>
  );
};

export default MyOrdersPage;
