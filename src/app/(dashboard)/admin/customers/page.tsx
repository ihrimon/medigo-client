import CustomerList from '@/components/modules/admin/customers';
import { getAllCustomers } from '@/services/customer'

const AdminCustomerPage = async () => {
  const {data: customersData} = await getAllCustomers();
  const customers = customersData?.data;
  console.log(customers);

  return (
    <div className='max-w-7xl mx-auto'>
      <h3 className='text-2xl mb-6'>Customers</h3>
      {customers?.length > 0 ? (
        <CustomerList customers={customers} />
      ) : (
        <div className='text-center text-3xl font-bold text-red-500'>
          Customers Are Not Available
        </div>
      )}
    </div>
  );
}

export default AdminCustomerPage