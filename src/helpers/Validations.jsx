// expr regulares
const expRegName = /^ [a - zA - Z0 - 9\s\-_,] + $/
const expRegPrice = /^[0-9]+(?:\.[0-9]{1,2})?$/
const expRegCategory = /^[a-zA-Z0-9\s]+$/
const expRegURL = /^(http|https):\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(\/\S*)?$/

// funciones para validar

export const validarNombre = (field) => {
    if (expRegName.test(field) && field.trim() !== "") {
        return true
    } else {
        return false
    }

}
export const validarPrecio = (field) => {
    const precio = parseFloat(field.trim());
    if (
        expRegPrice.test(field) &&
        !isNaN(precio) &&
        precio > 0 &&
        precio < 150000
    ) {
        return true;
    } else {
        return false;
    }
}


export const validarCategoria = (field) => {
    if (
        expRegCategory.test(field) &&
        field.trim() !== "" &&
        (
            field === "calzado" ||
            field === "indumentaria" ||
            field === "accesorio"
        )
    ) {
        return true
    } else {
        return false
    }
}