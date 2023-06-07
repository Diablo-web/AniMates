import { filterActionTypes } from "../utils/constants";

const {
  DISPLAY_PRODUCTS,
  DISPLAY_CATEGORIES,
  SEARCH,
  CATEGORY,
  SORT_BY_PRICE,
  SORT_BY_RATING_RANGE,
  CLEAR_FILTERS,
  GET_PRODUCT_DETAILS,
} = filterActionTypes;

export const initialProductState = {
  products: [],
  allCategories: [],
  searchInput: "",
  categoryInput: "",
  sizeInput: [],
  availabilityInput: ["inStock"],
  sortPriceRadioInput: "",
  ratingRange: 5,
  productDetail: {},
  
};

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case DISPLAY_PRODUCTS:
      return { ...state, products: payload };
    case DISPLAY_CATEGORIES:
      return { ...state, allCategories: payload };
    case SEARCH:
      return { ...state, searchInput: payload };
    case CATEGORY:
      return {
        ...state, 
        categoryInput: state.categoryInput.includes(payload)
          ? state.categoryInput.filter(
              (categoryType) => categoryType !== payload
            )
          : [...state.categoryInput, payload],
      };
    
    case SORT_BY_PRICE:
      return { ...state, sortPriceRadioInput: payload };
    case SORT_BY_RATING_RANGE:
      return { ...state, ratingRange: payload };
    case CLEAR_FILTERS:
      return {
        ...initialProductState,
        products: payload.products,
        allCategories: payload.categories,
      };
    case GET_PRODUCT_DETAILS:
      return { ...state, productDetail: payload };
    case SET_ORDER_LIST:
      return { ...state, orderList: [...state.orderList, payload] };
    
    default:
      return state;
  }
};
