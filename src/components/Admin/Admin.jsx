import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from './Product';

const Admin = ({ products, getApi, URL }) => {



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
      {products.length !== 0 ? (
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
            {products?.map((product) => (
              <Product key={product.id}
                product={product}
                URL={URL}
                getApi={getApi} />

            ))}
          </tbody>
        </Table>
      ) : (
        <div className="d-flex align-items-center justify-content-center">
          {/* No products found message */}
          <h1>No hay productos disponibles</h1>
        </div>
      )
      }
    </Container >
  );
};

export default Admin;
