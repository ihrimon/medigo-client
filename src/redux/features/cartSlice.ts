import { IProduct } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface CartProduct extends IProduct {
  orderQuantity: number;
}

interface InitialState {
  products: CartProduct[];
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

const initialState: InitialState = {
  products: [],
  shippingAddress: {
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productAdd = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (productAdd) {
        productAdd.orderQuantity += 1;
        return;
      }

      state.products.push({ ...action.payload, orderQuantity: 1 });
    },

    incrementOrderQuantity: (state, action) => {
      const productIncrement = state.products.find(
        (product) => product._id === action.payload
      );

      if (productIncrement) {
        productIncrement.orderQuantity += 1;
        return;
      }
    },

    decrementOrderQuantity: (state, action) => {
      const productDecrement = state.products.find(
        (product) => product._id === action.payload
      );

      if (productDecrement && productDecrement.orderQuantity > 1) {
        productDecrement.orderQuantity -= 1;
        return;
      }
    },

    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
    clearCart: (state) => {
      state.products = [];
    },

    updateShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
  },
});

//* Products
export const orderedProductsSelector = (state: RootState) => {
  return state.cart.products;
};

export const orderSelector = (state: RootState) => {
  return {
    products: state.cart.products.map((product) => ({
      product: product._id,
      quantity: product.orderQuantity,
      color: 'White',
    })),
    shippingAddress: `${state.cart.shippingAddress} - ${state.cart.shippingAddress.city}`,
    paymentMethod: 'Online',
  };
};

//* Payment
export const subTotalSelector = (state: RootState) => {
  return state.cart.products.reduce((acc, product) => {
    if (product.discountPrice) {
      return acc + product.discountPrice * product.orderQuantity;
    } else {
      return acc + product.price * product.orderQuantity;
    }
  }, 0);
};

export const shippingCostSelector = (state: RootState) => {
  if (
    state.cart.shippingAddress.city &&
    state.cart.shippingAddress.city === 'Dhaka' &&
    state.cart.products.length > 0
  ) {
    return 60;
  } else if (
    state.cart.shippingAddress.city &&
    state.cart.shippingAddress.city !== 'Dhaka' &&
    state.cart.products.length > 0
  ) {
    return 120;
  } else {
    return 0;
  }
};

export const grandTotalSelector = (state: RootState) => {
  const subTotal = subTotalSelector(state);
  const shippingCost = shippingCostSelector(state);

  return subTotal + shippingCost;
};

export const shippingAddressSelector = (state: RootState) => {
  return state.cart.shippingAddress;
};

export const {
  addProduct,
  incrementOrderQuantity,
  decrementOrderQuantity,
  removeProduct,
  updateShippingAddress,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
