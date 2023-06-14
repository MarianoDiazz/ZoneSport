import React from 'react';
import { Card, CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardProduct = ({ product }) => {
    return (
        <div>
            <Card>
                <CardImg className='img-fluid' variant='top' src={product.image} />
                <Card.Body>
                    <div className='d-flex align-items-center'>
                        <Card.Title>
                            {product.name}
                        </Card.Title>
                        <span>New</span>
                    </div>

                    <Card.Text>
                        {/* {product.desc} */}
                    </Card.Text>
                    <div>
                        <p> $ {product.price}</p>
                        <Link to="/product/buy"
                            className='btn-red '>
                            Comprar
                        </Link>
                    </div>
                </Card.Body>
            </Card>

        </div>
    );
};

export default CardProduct;