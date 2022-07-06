import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useParams } from "react-router-dom";
import { selectedProduct } from "../Redux/actions/productsActions";



function ProductDetails({ id, author, categories, summary }) {
  const { productid } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectedProduct(productid));
  }, [dispatch, productid])
  let product = useSelector((state) => state.allProducts);
  console.log(product);
  return (
    <>
      <p>{summary}</p>
    </>

  )
}

export default ProductDetails
