import React from 'react';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import ProductListing from '../container/ProductListing';
import ProductDetails from '../container/ProductDetails';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../Redux/actions/productsActions';
import Category from './Category';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const fetchProducts = () => {
    setLoading(true);
    fetch('/api/posts')
      .then(res => res.json())
      .then(json => {
        dispatch(setProducts(json.posts))
        setLoading(false);
      });
  }

  useEffect(() => {
    AOS.init();
    fetchProducts();
 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main>
      {
        loading ? <div> loading</div> : <>
          <Header />
          <Category/>
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:productid" element={<ProductDetails />} />
          </Routes>
        </>
      }
    </main>
  );
}

export default App;
