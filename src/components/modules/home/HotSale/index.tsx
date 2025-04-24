import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

interface SaleCard {
  id: number;
  badge: string;
  title: string;
  action: string;
  image: string;
  bgColor: string;
  discount?: string;
}

const saleCards: SaleCard[] = [
  {
    id: 1,
    badge: 'SANITIZER',
    title: 'Hand Sanitizer Collections',
    action: 'SHOP NOW',
    image:
      'https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?w=500&q=80',
    bgColor: 'bg-[#FFF5EB]',
  },
  {
    id: 2,
    badge: 'HOT SALE',
    title: 'Face Wash Sale Collections',
    action: 'DISCOVER NOW',
    image:
      'https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?w=500&q=80',
    bgColor: 'bg-[#EBF6FF]',
  },
  {
    id: 3,
    badge: 'FACIAL MASK',
    title: 'Facial Mask Sale',
    action: 'DISCOVER NOW',
    image:
      'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=500&q=80',
    bgColor: 'bg-[#FFE8E8]',
    discount: '50%',
  },
];

export function HotSale() {
  return (
    <section className='py-16 px-4 max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {saleCards.map((card) => (
          <div
            key={card.id}
            className={`${card.bgColor} rounded-2xl p-8 relative overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer`}
          >
            <div className='flex flex-col h-full justify-between'>
              <div>
                <Badge className='bg-teal-500 hover:bg-teal-600 mb-4'>
                  {card.badge}
                </Badge>
                <h3 className='text-2xl font-bold text-slate-800 mb-2'>
                  {card.title}
                  {card.discount && (
                    <span className='block text-rose-500'>
                      Up To {card.discount} Off
                    </span>
                  )}
                </h3>
                <button className="text-blue-600 font-semibold relative inline-flex items-center gap-2 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-current after:transition-transform after:scale-x-0 hover:after:scale-x-100">
                  {card.action}
                </button>
              </div>
              <div className='absolute right-0 bottom-0 w-40 h-40'>
                <Image
                width={500}
                height={500}
                  src={card.image}
                  alt={card.title}
                  className='w-full h-full object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
