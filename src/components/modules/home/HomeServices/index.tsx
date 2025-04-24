import { Truck, Package, MapPin, Settings, Award, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ReactNode } from 'react';

interface Guarantee {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
}

const guarantees: Guarantee[] = [
  {
    id: 1,
    icon: <Truck className='w-8 h-8 text-orange-400' />,
    title: 'In-Store Pickup',
    description: 'Convenient pickup at your nearest store location',
  },
  {
    id: 2,
    icon: <Package className='w-8 h-8 text-orange-400' />,
    title: 'Free Shipping Over $20',
    description: 'Enjoy free shipping on all orders above $20',
  },
  {
    id: 3,
    icon: <MapPin className='w-8 h-8 text-orange-400' />,
    title: 'Store Locator',
    description: 'Find our stores easily with our store locator',
  },
  {
    id: 4,
    icon: <Settings className='w-8 h-8 text-orange-400' />,
    title: 'Free Servicing',
    description: 'Professional servicing for all our products',
  },
  {
    id: 5,
    icon: <Award className='w-8 h-8 text-orange-400' />,
    title: '100% Quality Product',
    description: 'We guarantee the quality of all our products',
  },
  {
    id: 6,
    icon: <Zap className='w-8 h-8 text-orange-400' />,
    title: 'Speed Perks',
    description: 'Earn rewards with every purchase you make',
  },
];

export function HomeServices() {
  return (
    <section className='py-16 px-4 max-w-7xl mx-auto bg-gray-50'>
      <div className='text-center mb-12'>
        <div className='flex items-center justify-center gap-2 mb-4'>
          <div className='bg-blue-500 p-1 rounded'>
            <Package className='w-5 h-5 text-white' />
          </div>
          <h2 className='text-3xl font-bold text-slate-800'>
            Know What You Pay For
          </h2>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {guarantees.map((guarantee) => (
          <Card
            key={guarantee.id}
            className='bg-white border-none shadow-sm hover:shadow-md transition-shadow'
          >
            <CardContent className='p-6'>
              <div className='flex items-start gap-4'>
                <div className='bg-orange-50 p-3 rounded-lg'>
                  {guarantee.icon}
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-slate-800 mb-2'>
                    {guarantee.title}
                  </h3>
                  <p className='text-gray-600'>{guarantee.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
