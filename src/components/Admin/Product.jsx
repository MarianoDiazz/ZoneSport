import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, getApi, URL }) => {


    const handleDelete = (id) => {

    }

    return (
        <tr>
            {/* <td>{product.id}</td> */}
            <td>{product.name}</td>
            <td>$ {product.price}</td>

            <td> {product.category}</td>
            <td className='w-25'>
                <div className='d-flex justify-content-center'>
                    <Link to={`admin/edit/${product.id}`}
                        className='btn-edit'>
                        Update
                    </Link>
                    <button className='btn-btn-red'>
                        Delete
                    </button>
                </div>

            </td>
        </tr>
    );
};

export default Product;