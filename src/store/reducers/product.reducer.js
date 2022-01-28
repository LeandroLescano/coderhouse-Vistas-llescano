import {
  FILTERED_PRODUCTS,
  SELECT_PRODUCT,
} from '../../store/actions/product.action';

import {PRODUCTS} from '../../data/products';

const initialState = {
  products: PRODUCTS,
  filteredProducts: [],
  selected: null,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selected: state.products.find(p => p.id === action.productId),
      };
    case FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter(
          p => p.category === action.categoryId,
        ),
      };
    default:
      return state;
  }
};

export default ProductReducer;
