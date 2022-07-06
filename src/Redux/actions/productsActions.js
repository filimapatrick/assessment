import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECT_PRODUCT,
    payload: product,
  };
};

export const Paginate = (page) => {
  return {
    type: ActionTypes.PAGINATE_PRODUCT,
    payload: page,
  };
};

export const Sort = (categories) => {
  return {
    type: ActionTypes.SORT_CATEGORY,
    payload: categories,
  };
};