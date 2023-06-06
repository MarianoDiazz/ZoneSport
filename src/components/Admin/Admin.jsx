import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Admin = () => {
  // Datos de ejemplo de los productos
  const products = [
    {
      id: 1,
      name: 'Producto 1',
      price: '$10.99',
      image: 'https://example.com/image1.jpg',
      category: 'Categoría 1',
      description: 'Descripción del producto 1',
    },
    // Agrega más productos aquí...
  ];

  // Función para obtener los productos desde una API
  const getApi = () => {
    // Lógica para obtener los productos desde una API
  };
  return (
    <Container className="py-5 containerTable">
      <div className="d-flex align-items-center justify-content-between">
        <h1>Administrar Productos</h1>

        <Link
          to="/admin/create"
          className="btn btn-primary text-decoration-none text-center text-light"
        >
          Agregar Producto
        </Link>
      </div>
      <hr />
      {/* Table of products */}
      {products && products.length !== 0 ? (
        <Table bordered hover responsive className="align-middle mt-3">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>URL de la imagen</th>
              <th>Categoría</th>
              <th className="product-description">Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                {/* Renderizar los datos de cada producto en las celdas de la tabla */}
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.image}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>
                  {/* Acciones para editar o eliminar el producto */}
                  <Link to={`/product/edit/${product.id}`}>Editar</Link> |{' '}
                  <Link to={`/product/delete/${product.id}`}>Eliminar</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="d-flex align-items-center justify-content-center">
          {/* No products found message */}
          <h1>No hay productos disponibles</h1>
        </div>
      )}
    </Container>
  );
};

export default Admin;
