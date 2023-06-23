import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const BestSeller = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Datos de ejemplo de los productos
  const products = [
    {
      id: 1,
      name: 'Nike Pro1',
      price: '$49.99',
      image: 'https://nikearprod.vtexassets.com/arquivos/ids/530053-1200-1200?v=638161359421770000&width=1200&height=1200&aspect=true',
    },
    {
      id: 2,
      name: 'Nike Pro3',
      price: '$45.99',
      image: 'https://nikearprod.vtexassets.com/arquivos/ids/456062-1400-1400?v=1773947332&width=1400&height=1400&aspect=true',
    },
    {
      id: 3,
      name: 'Nike Club',
      price: '$34.99',
      image: 'https://nikearprod.vtexassets.com/arquivos/ids/620503-1400-1400?v=1772073586&width=1400&height=1400&aspect=true',
    },
    {
      id: 4,
      name: 'Nike Zoom Mercurial',
      price: '$49.99',
      image: 'https://nikearprod.vtexassets.com/arquivos/ids/530025-1400-1400?v=1772145457&width=1400&height=1400&aspect=true',
    },
    {
      id: 5,
      name: 'Jordan Essentials',
      price: '$69.99',
      image: 'https://nikearprod.vtexassets.com/arquivos/ids/532758-1400-1400?v=1772126739&width=1400&height=1400&aspect=true',
    },
    // Otros productos...
  ];

  return (
    <div className="product-section">
      <h1>Productos destacados</h1>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BestSeller;
