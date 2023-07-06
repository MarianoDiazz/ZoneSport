import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import {
  validarNombre,
  validarCategoria,
  validarPrecio,
  validarURL
} from '../../helpers/Validations';

const ProductCreate = ({ URL, getApi }) => {
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    image: '',
    category: '',
    description: '',
    stock: 0,
    sizes: []
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar formulario
    if (
      !validarNombre(product.name) ||
      !validarCategoria(product.category) ||
      !validarPrecio(product.price) ||
      !validarURL(product.image) ||
      (product.sizes.length === 0 || product.sizes.includes(''))
    ) {
      Swal.fire('Error!', 'Los campos son inválidos', 'error');
      return;
    }

    // Envío de datos
    const newProduct = { ...product };

    Swal.fire({
      title: '¿Quieres crear el producto?',
      text: 'Se creará un nuevo producto',
      icon: 'warning',
      showCancelButton: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(URL, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
          });

          if (res.status === 201) {
            Swal.fire('Creado', 'Producto creado', 'success');
            getApi();
            navigate('/Admin');
            setProduct((prevProduct) => ({ ...prevProduct, sizes: [] }));
            e.target.reset();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'sizes') {
      const sizes = value.split(',').map((size) => size.trim());
      setProduct((prevProduct) => ({ ...prevProduct, sizes }));
    } else {
      setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    }
  };

  return (
    <Container className="py-5 containerForm">
      <h1>Agregar Producto</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={product.description}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>URL de la imagen</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={product.image}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            as="select"
            name="category"
            value={product.category}
            onChange={handleInputChange}
          >
            <option value="">Seleccionar categoría</option>
            <option value="calzado">Calzado</option>
            <option value="indumentaria">Indumentaria</option>
            <option value="accesorio">Accesorio</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="stock">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="sizes">
          <Form.Label>Talles (separados por comas)</Form.Label>
          <Form.Control
            type="text"
            name="sizes"
            value={product.sizes.join(', ')}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button type="submit" className="btn-AddProduct my-4">
          <span>Agregar producto</span>
        </Button>
      </Form>
    </Container>
  );
};

export default ProductCreate;
