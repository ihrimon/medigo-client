// import OrderList from '@/components/modules/admin/orders';
// import { getAllOrders } from '@/services/order';
// import React from 'react'

// const AdminOrdersPage = async () => {
//     const { data: ordersData } = await getAllOrders();
//       const orders = ordersData?.data;

//   return (
//     <div className='max-w-7xl mx-auto'>
//       <h3 className='text-2xl mb-6'>Orders</h3>
//       {orders.length > 0 ? (
//         <OrderList
//           orders={orders}
//         />
//       ) : (
//         <div className='text-center text-3xl font-bold text-red-500'>
//           Products Are Not Available
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminOrdersPage