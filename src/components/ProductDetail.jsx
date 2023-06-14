import React, { useEffect, useState } from 'react';

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Lógica para obtener los datos del producto según el ID proporcionado en la URL
    const productId = match.params.id;
    const productData = getProductData(productId); // Supongamos que tienes una función para obtener los datos del producto
    setProduct(productData);
  }, [match.params.id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      {/* Otras partes de la información del producto */}
    </div>
  );
};

export default ProductDetail;
