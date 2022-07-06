import React from 'react';
import ProductComponent from './ProductComponent';
import { Pagination } from '../components/Pagination';
import Subheader from '../components/Subheader';

function ProductListing() {

  return (
    <>
    <Subheader/>
      <ProductComponent />
      <Pagination />
    </>
  )
}

export default ProductListing