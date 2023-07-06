import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { FaCartPlus, FaArrowLeft } from 'react-icons/fa';

const ProductDetail = ({ URL }) => {
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState('');

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

  const renderSizeButtons = () => {
    if (!Array.isArray(product.sizes)) {
      return null;
    }

    return product.sizes.map((size) => (
      <Button
        key={size}
        className={`size-button ${selectedSize === size ? 'selected' : ''}`}
        onClick={() => setSelectedSize(size)}
      >
        {size}
      </Button>
    ));
  };


  return (
    <Container className="product-detail">
      <Row>
        <Col xl={6} md={6} lg={6}>
          <div className="product-image-container">
            <img className="product-image" src={product.image} alt={product.name} />
          </div>
        </Col>
        <Col xl={6} md={6}>
          <div className="product-details">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-category">{product.category}</p>
            <h3 className="product-price">${product.price}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-stock">{product.stock > 0 ? `En Stock: ${product.stock}` : 'Out of Stock'}</p>
            <div className="product-sizes">
              <p>Talles:</p>
              <div className="size-buttons">{renderSizeButtons()}</div>
            </div>

            <div className="product-actions d-flex">
              <Col>
                <Button className="add-to-cart-button">
                  <FaCartPlus className="button-icon" /> Add to Cart
                </Button>
              </Col>
            </div>
          </div>
        </Col>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header> <h4>Devoluciones y envios</h4></Accordion.Header>
            <Accordion.Body>
              Entregas a todo el país. Consultá la fecha estimada
              de entrega al realizar la compra. Podés devolver tu
              pedido por cualquier motivo, sin cargo, dentro d
              un plazo de 30 días.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><h4>Métodos de pago</h4></Accordion.Header>
            <Accordion.Body>
              Aceptamos las siguientes opciones de pago:
              Tarjetas de Crédito, Tarjetas de Débito y Mercado Pago.            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  );
};

export default ProductDetail;
