export interface Product {
  id: string;
  name: string;
  category: 'HAND CARE' | 'MOUTH & TEETH' | 'VITAMINS' | 'PAIN & FEVER';
  image: string;
  price: number;
  originalPrice?: number; 
  onSale?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Eucerin Sun Transparent',
    category: 'HAND CARE',
    image: '/lovable-uploads/e4eb586b-a6c7-4040-b632-f3b1cfdc7753.png',
    price: 20.0,
    originalPrice: 30.0,
    onSale: true,
  },
  {
    id: '2',
    name: 'Quibinos Natural Gel 100 ml',
    category: 'VITAMINS',
    image: '/lovable-uploads/e4eb586b-a6c7-4040-b632-f3b1cfdc7753.png',
    price: 10.0,
    originalPrice: 30.0,
    onSale: true,
  },
  {
    id: '3',
    name: 'Loratadin Actavis Tablet',
    category: 'PAIN & FEVER',
    image: '/lovable-uploads/e4eb586b-a6c7-4040-b632-f3b1cfdc7753.png',
    price: 40.0,
    onSale: true,
  },
  {
    id: '4',
    name: 'Loratadine Ratiopharm Tablet',
    category: 'VITAMINS',
    image: '/lovable-uploads/e4eb586b-a6c7-4040-b632-f3b1cfdc7753.png',
    price: 25.0,
    originalPrice: 50.0,
    onSale: true,
  },
  {
    id: '5',
    name: 'Colgate Pro Relief',
    category: 'MOUTH & TEETH',
    image: '/lovable-uploads/e4eb586b-a6c7-4040-b632-f3b1cfdc7753.png',
    price: 15.0,
  },
  {
    id: '6',
    name: 'Advanced Vitamin Complex',
    category: 'VITAMINS',
    image: '/lovable-uploads/e4eb586b-a6c7-4040-b632-f3b1cfdc7753.png',
    price: 35.0,
  },
  {
    id: '7',
    name: 'Hand Sanitizer Pro',
    category: 'HAND CARE',
    image: '/lovable-uploads/e4eb586b-a6c7-4040-b632-f3b1cfdc7753.png',
    price: 12.5,
    originalPrice: 18.0,
    onSale: true,
  },
  {
    id: '8',
    name: 'Ibuprofen Express',
    category: 'PAIN & FEVER',
    image: '/lovable-uploads/e4eb586b-a6c7-4040-b632-f3b1cfdc7753.png',
    price: 8.99,
  },
];
