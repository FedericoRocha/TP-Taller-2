const productosRoutes = require('../routes/productosRoutes');

const productosEnLaBaseDeDatos=[
    { id: 1,  nombre: 'zapatilla adidas', precio : 30000, cantidad: 10, color: 'negra', ano: 2020, marca: 'adidas', linkcompra : '', imagen1: '', imagen2: '', imagen3: '', imagen4: '', pocoStock: false, oferta: false }
];


const getAll = (valorBusqueda) => {
    if (valorBusqueda != "" && valorBusqueda != undefined) {
        return productosEnLaBaseDeDatos.filter(p =>
            //el include es como el like
            p.marca.toUpperCase().includes(valorBusqueda.toUpperCase(valorBusqueda)));
    }
    else {
        return productosEnLaBaseDeDatos;
    }
}

const getById = (id) => {
    return productosEnLaBaseDeDatos.find(producto => producto.id == id);
}

const createProducto = (producto) => {

    let marca = producto.marca;
    let descripcion = producto.descripcion;
    let precio = producto.precio;
    let cantidad = producto.cantidad;
    let imagen = producto.imagen;
    console.log(producto);
    return producto;
}

const editProducto = (producto) => {

    let id = producto.id;
    console.log(id)
    let marca = producto.marca;
    console.log(marca)
    let descripcion = producto.descripcion;
    let precio = producto.precio;
    let cantidad = producto.cantidad;
    let imagen = producto.imagen;
    console.log(producto);

    return producto;
}

const deleteProducto = (id) => {

    console.log(id);
}

module.exports = { getAll, getById, createProducto, editProducto, deleteProducto }