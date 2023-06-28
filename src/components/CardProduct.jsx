import React from 'react';
import { Card, CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardProduct = ({ product }) => {
    return (
        <div>
            <Link to="/product/buy" className='text-decoration-none'>
                <Card>
                    <CardImg className='img-fluid' variant='top' src={product.image} />
                    <Card.Body>
                        <div className='d-flex align-items-center'>
                            <Card.Title>
                                {product.name}
                            </Card.Title>
                            <span className='newSpan'>New</span>
                        </div>

                        <Card.Text>
                           {/* { product.category} */}
                        </Card.Text>
                        <div>
                            <p className='productPrice'> $ {product.price}</p>


                        </div>
                    </Card.Body>
                </Card>
            </Link>

        </div>
    );
};

export default CardProduct;