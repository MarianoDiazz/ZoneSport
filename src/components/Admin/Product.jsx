import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Product = ({ product, getApi, URL }) => {
  const { id, name, price, category } = product;

  const handleDelete = async (id) => {
    const confirmation = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (confirmation.isConfirmed) {
      try {
        const response = await fetch(`${URL}/${id}`, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
            // "x-access-token": JSON.parse(localStorage.getItem("user-token")).token,
          },
        });

        if (response.status === 200) {
          Swal.fire('Eliminado', 'El producto ha sido eliminado', 'success');
          getApi(); // Actualizar la lista de productos
        } else {
          Swal.fire('Error', 'No se pudo eliminar el producto', 'error');
        }
      } catch (error) {
        console.log(error);
        Swal.fire('Error', 'Ocurrió un error al eliminar el producto', 'error');
      }
    }
  };

  return (
    <tr>
      <td>{name}</td>
      <td>$ {price}</td>
      <td>{category}</td>
      <td className='w-25'>
        <div className='d-flex justify-content-center'>
          <Link to={`/admin/edit/${id}`} >
            <button className='btnUpdate'>
              Update
            </button>
          </Link>
          <button className='btnDelete' onClick={() => handleDelete(id)}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Product;
