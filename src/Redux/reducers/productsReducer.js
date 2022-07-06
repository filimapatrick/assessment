import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
  currentProduct: {},
  currentPageProducts: [],
  currentPage: 1,
  sortCategory: "",
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload, currentPageProducts: payload.slice((state.currentPage - 1), 10), currentPage: 1 };
    case ActionTypes.SELECT_PRODUCT:
      const currentSelectedProduct = state.products?.find((item) => item.id === payload);
      return { ...state, currentProduct: currentSelectedProduct }
    case ActionTypes.PAGINATE_PRODUCT:
      if (state.sortCategory) {
        return {
          ...state, currentPageProducts: state.products.filter((item) => {
            const d = item.categories.map((category) => category.name)
            return d.includes(state.sortCategory)
          })
            .slice((payload - 1) * 10, payload * 10), currentPage: payload
        };
      }
      const currentPage = payload;
      const currentPageProducts = state.products.slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10);
      return { ...state, currentPageProducts, currentPage };
    case ActionTypes.SORT_CATEGORY:
      const filtered = state.products.filter((item) => {
        const d = item.categories.map((category) => category.name)
        return d.includes(payload)
      })
        .slice(0, 10)
      return { ...state, currentPageProducts: filtered, currentPage: 1, sortCategory: payload };
    default:
      return state;
  }
};

