export interface ProductDeal {
  image: string;
  brand: string;
  rating: number;
  title: string;
  currentPrice: number;
  originalPrice?: number;
  timeRemaining: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export const dealProducts: ProductDeal[] = [
  {
    image: '/',
    brand: 'Vitazeen',
    rating: 5,
    title: 'Test Up Men Over 40',
    currentPrice: 50.0,
    originalPrice: 60.0,
    timeRemaining: {
      days: 13,
      hours: 17,
      minutes: 7,
      seconds: 32,
    },
  },
  {
    image:
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=150',
    brand: 'Soft Toys',
    rating: 4,
    title: 'Omega-3 Fish Oil',
    currentPrice: 99.0,
    timeRemaining: {
      days: 39,
      hours: 17,
      minutes: 7,
      seconds: 32,
    },
  },
  {
    image:
      'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=150',
    brand: 'Vitazeen',
    rating: 5,
    title: 'Red Ginseng Royal',
    currentPrice: 50.0,
    timeRemaining: {
      days: 56,
      hours: 17,
      minutes: 7,
      seconds: 32,
    },
  },
  {
    image:
      'https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&q=80&w=150',
    brand: 'NutriLife',
    rating: 4,
    title: 'Vitamin D3 with K2',
    currentPrice: 35.0,
    originalPrice: 45.0,
    timeRemaining: {
      days: 23,
      hours: 14,
      minutes: 52,
      seconds: 11,
    },
  },
];
