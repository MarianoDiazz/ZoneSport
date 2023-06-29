import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Admin from './components/Admin/Admin';
import Home from './components/Home';
import Navigation from './components/Navigation';
import ProductCreate from './components/Admin/ProductCreate';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
// import axios from './config/AxiosApi';
import EditProduct from './components/Admin/EditProduct';

function App() {
  const [products, setProducts] = useState([])

  //  variable de entorno
  // por problemas la defini en index.html
  const URL = import.meta.env.VITE_REACT_APP_API_ZONESPORT;
  // console.log(URL)


  useEffect(() => {
    getApi()
  }, [])
  const getApi = async () => {
    try {
      const res = await fetch(' http://localhost:3007/products')
      const productApi = await res.json()
      setProducts(productApi)


      // const res = await axios.get(URL)
      // const productApi = res?.data
      // setProducts(productApi)


    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BrowserRouter>
      <Navigation />
      <div>
        <main>
          <Routes>
            <Route exact path="/" element={<Home products={products} />} />
            <Route path="/Admin" element={<Admin products={products} URL={URL} getApi={getApi} />} />
            <Route path="/Admin/create" element={<ProductCreate URL={URL} getApi={getApi} />} />
            <Route path="/Admin/edit/:id" element={<EditProduct URL={URL} getApi= {getApi} />} />
            <Route path="/Admin/buy/:id" element={<ProductDetail URL={URL} />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
