// expresiones regulares
const expRegName = /^[A-Za-z\s?]+$/;
const expRegPrice = /[0-9]+$/;
const expRegCategory = /^[a-zA-Z0-9\s]+$/;
const expRegURL = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

// funciones para validar

export const validarNombre = (field) => {
  return expRegName.test(field.trim());
};

export const validarPrecio = (field) => {
  const precio = parseFloat(field.trim());
  return (
    expRegPrice.test(field) &&
    !isNaN(precio) &&
    precio > 0 &&
    precio < 150000
  );
};

export const validarURL = (field) => {
  return expRegURL.test(field.trim());
};

export const validarCategoria = (field) => {
  return (
    expRegCategory.test(field) &&
    field.trim() !== "" &&
    ["calzado", "indumentaria", "accesorio"].includes(field)
  );
};
