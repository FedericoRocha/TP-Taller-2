const productosRoutes = require('../routes/productosRoutes');

const db = require('../services/dbService')

const productosEnLaBaseDeDatos=[
    { id: 1,  nombre: 'zapatilla adidas', precio : 30000, cantidad: 10, color: 'negra', ano: 2020, marca: 'adidas', linkcompra : '', imagen1: '', imagen2: '', imagen3: '', imagen4: '', pocoStock: false, oferta: false }
];


const getAll = (valorBusqueda) => {
    if (valorBusqueda != "" && valorBusqueda != undefined) {
        return db.getShoesFiltered(valorBusqueda);
    }
    else {
        return db.getAllShoes();
    }
}

const getById = (id) => {
    return db.getShoeById(id);
}

/*const createProducto = (producto) => {

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
}*/

const getMaterials = () =>{
    return db.getMaterials();
}

const getColors = () => {
    return db.getColors();
}


const getMarcas = () =>{
    return db.getAllMarcas();
}

const getTipos = () =>{
    return db.getTipos();
}

const getOnSale = () =>{
    return db.getShoesOnSale();
}

const finishPurchase = (purchase) =>{
    return db.addPurchase(purchase.idCompra, purchase.idProducto, purchase.cliente);
}

const getImage = (idProducto) =>{
    return db.getImageForProduct(idProducto);
}


module.exports = { getAll, getById,getMaterials,getColors ,getMarcas,getTipos,getOnSale,finishPurchase,getImage}