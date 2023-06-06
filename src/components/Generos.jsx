import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
const Generos = () => {
    return (
        <div>
            <Container className='container-gen'>
                <Row>
                    <Col sm={12} md={6}>
                        <div className='genero-m'>
                            <h2>Mujer</h2>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className='genero-h'>
                            <h2>Hombre</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Generos;