import React from 'react';
import CarouselHome from './CarouselHome';
import BestSeller from './BestSeller';
import Marcas from './Marcas';
import Generos from './Generos';
import { Row, Col, Container } from 'react-bootstrap';
import CardProduct from './CardProduct';

const Home = ({ products }) => {
    return (
        <div>
            <CarouselHome />
            <BestSeller />
            <Marcas />
            <h1>Productos</h1>
            <hr />
            {products?.length !== 0 ?
            <Container>
                <Row>
                    {products?.map((product) => (
                        <Col xl={3} lg={4} md={6} className='my-2'>
                            <CardProduct product={product} />
                        </Col>
                    ))}
                </Row>
                </Container>
                :
                <div>
                    <h2>No se encontro nada</h2>
                </div >
            }
            {/* <Generos /> */}
        </div>
    );
};

export default Home;