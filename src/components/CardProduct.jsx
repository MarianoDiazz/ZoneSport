import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardProduct = ({ product }) => {
    return (
        <div>
            <Link to={`/Admin/buy/${product.id}`} className='text-decoration-none'>
                <Card className="product-card">
                    <Card.Img variant="top" src={product.image} className="product-img" />
                    <Card.Body>
                        <div className="product-header">
                            <Card.Title className="product-title">{product.name}</Card.Title>
                            <span className="new-badge">New</span>
                        </div>
                        <Card.Text className="product-category">{/* product.category */}</Card.Text>
                        <div className="product-footer">
                            <p className="product-price">${product.price}</p>
                            <Link to={`/Admin/buy/${product.id}`} className="text-decoration-none">
                                <Button variant="primary" className="buy-button">Buy Now</Button>
                            </Link>

                        </div>
                    </Card.Body>
                </Card>
            </Link>

        </div>
    );
};

export default CardProduct;