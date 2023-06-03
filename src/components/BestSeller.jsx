import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BestSeller = () => {
    const settings = {
        dots: false,
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
            image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            id: 2,
            name: 'Nike Pro1',
            price: '$45.99',
            image: 'https://nikearprod.vtexassets.com/arquivos/ids/498039-1400-1400?v=1772127920&width=1400&height=1400&aspect=true',
        },
        {
            id: 2,
            name: 'Nike Club',
            price: '$34.99',
            image: 'https://nikearprod.vtexassets.com/arquivos/ids/620503-1400-1400?v=1772073586&width=1400&height=1400&aspect=true',
        },
        {
            id: 2,
            name: 'Nike Zoom Mercurial',
            price: '$49.99',
            image: 'https://nikearprod.vtexassets.com/arquivos/ids/530025-1400-1400?v=1772145457&width=1400&height=1400&aspect=true',
        },
        {
            id: 2,
            name: 'Jordan Essentials',
            price: '$69.99',
            image: 'https://nikearprod.vtexassets.com/arquivos/ids/532758-1400-1400?v=1772126739&width=1400&height=1400&aspect=true',
        },
        // Otros productos...
    ];

    return (
        <div className="product-section">
            <h2 className='py-2 fs-1'>Productos destacados</h2>
            <Slider {...settings}>
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        {/* Otros detalles del producto */}
                        {/* <button className="slick-next custom-next-button" /> */}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BestSeller;
