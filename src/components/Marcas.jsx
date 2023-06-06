import React from "react";
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { SiAdidas, SiFila, SiNewbalance, SiNike, SiPuma, SiReebok, SiUnderarmour } from "react-icons/si";
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 4,
            },
        },
    ],
};


const Marcas = () => {
    return (
        <div className="container-marcas">
            <h1 className="py-3 text-center">Nuestras Marcas</h1>
            <div className="marcas-slider">
                <Slider {...settings}>


                    <SiAdidas className="marcas-icon" />
                    <SiUnderarmour className="marcas-icon" />
                    <SiNewbalance className="marcas-icon" />
                    <SiPuma className="marcas-icon" />
                    <SiNike className="marcas-icon" />
                    <SiFila className="marcas-icon" />
                    <SiReebok className="marcas-icon" />
                </Slider>
            </div>
        </div>
    );
};

export default Marcas;
