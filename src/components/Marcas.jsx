import React from "react";
import Slider from 'react-slick';
import { SiAdidas, SiFila, SiNewbalance, SiNike, SiPuma, SiReebok, SiUnderarmour } from "react-icons/si";

const Marcas = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
          slidesToShow: 3,
        },
      },
    ],
  };


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
