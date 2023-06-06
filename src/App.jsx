import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Admin from './components/Admin/Admin';
import Home from './components/Home';
import Navigation from './components/Navigation';
import ProductCreate from './components/Admin/ProductCreate';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Admin" element={<Admin />} />
            <Route exact path="/Admin/create" element={<ProductCreate />} />

          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
