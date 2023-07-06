import React, { useEffect, useRef, useState } from 'react';
import { Container, Form, FormGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {
  validarNombre,
  validarCategoria,
  validarPrecio,
  validarURL
} from '../../helpers/Validations';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const EditProduct = ({ URL, getApi }) => {
  // defino el state en un objeto vacio. Recupero y guardo la info del prod
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  // Params. Recupero ID
  const { id } = useParams();

  // Uso references
  const nameRef = useRef('');
  const urlRef = useRef('');
  const priceRef = useRef('');
  const stockRef = useRef('');
  const descripRef = useRef('');
  const sizeRef = useRef('');

  // LLamlo a la api con useefect, para obtener el prod por su id

  useEffect(() => {
    obtenerProducto();
  }, []);

  const obtenerProducto = async () => {
    // llamo a la api con trycatch
    try {
      const res = await fetch(`${URL}/${id}`);
      const productApi = await res.json();
      setProduct(productApi);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validar la info
    if (
      !validarNombre(product.name) ||
      !validarCategoria(product.category) ||
      !validarPrecio(product.price) ||
      !validarURL(product.image)
    ) {
      Swal.fire('Error!', 'Los campos son inválidos', 'error');
      return;
    }

    // guardo el objeto
    const sizesArray = sizeRef.current.value.split(',').map((size) => size.trim());
    const productUpdate = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      image: urlRef.current.value,
      category: product.category,
      description: descripRef.current.value,
      stock: stockRef.current.value,
      sizes: sizesArray,
    };

    Swal.fire({
      title: 'Estas seguro?',
      text: 'El producto cambiará los valores',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Update',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(productUpdate),
          });
          if (res.status === 200) {
            Swal.fire('Update', 'El producto se actualizó correctamente', 'success');
            getApi();
            navigate('/Admin');
          }
        } catch (error) {
          console(error);
        }
      }
    });
  };

  return (
    <div>
      <Container>
        <h1>Editar Producto</h1>
        <hr></hr>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              defaultValue={product.name}
              ref={nameRef}
            />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="price"
              defaultValue={product.price}
              ref={priceRef}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              defaultValue={product.description}
              ref={descripRef}
            />
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>URL de la imagen</Form.Label>
            <Form.Control
              type="text"
              name="image"
              defaultValue={product.image}
              ref={urlRef}
            />
          </Form.Group>
          <Form.Group controlId="stock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              defaultValue={product.stock}
              ref={stockRef}
            />
          </Form.Group>
          <Form.Group controlId="sizes">
            <Form.Label>Talles (separados por comas)</Form.Label>
            <Form.Control
              type="text"
              name="sizes"
              defaultValue={product.sizes}
              ref={sizeRef}
            />
          </Form.Group>

          <Form.Group controlId="category">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              as="select"
              name="category"
              value={product.category}
              onChange={({ target }) => setProduct({ ...product, category: target.value })}
            >
              <option value="">Seleccionar categoría</option>
              <option value="calzado">Calzado</option>
              <option value="indumentaria">Indumentaria</option>
              <option value="accesorio">Accesorio</option>
            </Form.Control>
          </Form.Group>

          <button type="submit" className="btn-AddProduct my-4">
            <span>Actualizar</span>
          </button>
        </Form>
      </Container>
    </div>
  );
};

export default EditProduct;
