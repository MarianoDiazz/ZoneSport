import React from 'react';
import CarouselHome from './CarouselHome';
import BestSeller from './BestSeller';
import Marcas from './Marcas';
import Generos from './Generos';

const Home = () => {
    return (
        <div>
            <CarouselHome />
            <BestSeller />
            <Marcas />
            <Generos />
        </div>
    );
};

export default Home;