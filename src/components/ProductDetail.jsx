import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { FaCartPlus, FaArrowLeft } from 'react-icons/fa';

const ProductDetail = ({ URL }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    try {
      const res = await fetch(`${URL}/${id}`);
      const productApi = await res.json();
      setProduct(productApi);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="product-detail">
      <Row>
        <Col xl={8} md={6}>
          <div className="product-image-container">
            <img className="product-image" src={product.image} alt={product.name} />
          </div>
        </Col>
        <Col xl={4} md={6}>
          <div className="product-details">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-category">{product.category}</p>
            <h3 className="product-price">${product.price}</h3>
            <p className="product-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan nulla quis nibh
              scelerisque, a interdum diam blandit. Aenean non neque dolor.
            </p>
            <div className="product-actions d-flex">
              <Col xl={7}>
                <Button className="add-to-cart-button">
                  <FaCartPlus className="button-icon display-4" /> Add to Cart
                </Button>
              </Col>
              <Col xl={5}>
                <Link to="/" className="text-decoration-none">
                  <Button className="back-to-products-button" variant="outline-primary">
                    <FaArrowLeft className="button-icon" /> Back to Products
                  </Button>
                </Link>
              </Col>

            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
