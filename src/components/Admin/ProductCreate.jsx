import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const ProductCreate = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para crear el producto con los datos ingresados

    // Resetear los campos del formulario después de crear el producto
    setName('');
    setPrice('');
    setImage('');
    setCategory('');
  };

  return (
    <Container className="py-5">
      <h1>Agregar Producto</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>URL de la imagen</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            as="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Seleccionar categoría</option>
            {/* Opciones de categorías */}
            <option value="categoria1">Categoría 1</option>
            <option value="categoria2">Categoría 2</option>
            <option value="categoria3">Categoría 3</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Crear
        </Button>
      </Form>
    </Container>
  );
};

export default ProductCreate;
