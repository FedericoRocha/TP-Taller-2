const productosRoutes = require('../routes/productosRoutes');

//const  = require('../services/Service')



const getAll = (valorBusqueda) => {
    if (valorBusqueda != "" && valorBusqueda != undefined) {
        return getShoesFiltered(valorBusqueda);
    }
    else {
        return getAllShoes();
    }
}

const getZapatillaporId = (id) => {
    return getShoeById(id);
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
    return getMaterials();
}

const getColors = () => {
    return getColors();
}


const getMarcas = () =>{
    return getAllMarcas();
}

const getTipos = () =>{
    return getTipos();
}

const getOnSale = () =>{
    return getShoesOnSale();
}

const finishPurchase = (purchase) =>{
    return addPurchase(purchase.idCompra, purchase.idProducto, purchase.cliente);
}

const getImage = (idProducto) =>{
    return getImageForProduct(idProducto);
}


const getShoesForMarcas =(idMarca) =>{
    return getShoesForMarca(idMarca);
}

const getShoesForMaterials = (idMaterial) =>{
    return getShoesForMaterial(idMaterial);
}


const getShoesForTypes = (idTipo) =>{
    return getShoesForType(idTipo);
}


const getShoesForTalles = (idTalle) => {
    return getShoesForTalle(idTalle);
}

const getShoesForColors = (idColor) =>{
    return getShoesForColor(idColor);
}

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'grip',
    password: 'admin',
    database: 'taller2',
    port: 3306
 });


 connection.connect(function(error){
    if(error){
       throw error;
    }else{
       console.log('Conexion correcta.');
    }
 });

//TODO Definir Tablas

getAllShoes = () =>{
    var query = connection.query(
        'SELECT Z.nombre, Z.precio, Z.ano,Z.oferta,Z.disponible,Z.ecologica.Z.fechaCarga,Z.descripcion,'+ 
        'T.tipo, M.marca, C.color, MA.material'+
        ' FROM Productos AS Z '+
        ' JOIN Tipo AS T ON Z.tipo = T.id'+
        ' JOIN Marca AS M ON Z.marca = M.id'+ 
        ' JOIN Color AS C ON Z.color = C.id'+
        ' JOIN Material AS MA ON Z.material = MA.id', [], 
        function(error, result){
           if(error){
                throw error;
           }else{
                console.log(result);
                return result;
           }
       }
    );
}


getAllTallesById = (id) =>{
    var query = connection.query(
        'SELECT * FROM Talle WHERE idproducto = ?', [id], 
        function(error, result){
           if(error){
                throw error;
           }else{
                console.log(result);
                return result;
           }
       }
    );
}


getAllMarcas = () =>{
    var query = connection.query(
        'SELECT * FROM Marca', [], 
        function(error, result){
           if(error){
                throw error;
           }else{
                console.log(result);
                return result;
           }
       }
    );
}

getAllMaterials =()=>{
    var query = connection.query(
        'SELECT * FROM Material', [], 
        function(error, result){
           if(error){
                throw error;
           }else{
                console.log(result);
                return result;
           }
       }
    );
}


getAllColors =()=>{
    var query = connection.query(
        'SELECT * FROM Color', [], 
        function(error, result){
           if(error){
                throw error;
           }else{
                console.log(result);
                return result;
           }
       }
    );
}

getShoeById = (id) =>{
    var query = connection.query(
        'SELECT Z.nombre, Z.precio, Z.ano,Z.oferta,Z.disponible,Z.ecologica.Z.fechaCarga,Z.descripcion,'+ 
        'T.tipo, M.marca, C.color, MA.material'+
        ' FROM Productos AS Z '+
        ' JOIN Tipo AS T ON Z.tipo = T.id'+
        ' JOIN Marca AS M ON Z.marca = M.id'+ 
        ' JOIN Color AS C ON Z.color = C.id'+
        ' JOIN Material AS MA ON Z.material = MA.id'+
        ' WHERE id = ?', [id], 
        function(error, result){
           if(error){
                throw error;
           }else{
                console.log(result);
                return result;
           }
       }
    );
}


getShoesFiltered = (filter) =>{
    var query = connection.query(
        'SELECT Z.nombre, Z.precio, Z.ano,Z.oferta,Z.disponible,Z.ecologica.Z.fechaCarga,Z.descripcion,'+ 
        'T.tipo, M.marca, C.color, MA.material'+
        ' FROM Productos AS Z '+
        ' JOIN Tipo AS T ON Z.tipo = T.id'+
        ' JOIN Marca AS M ON Z.marca = M.id'+ 
        ' JOIN Color AS C ON Z.color = C.id'+
        ' JOIN Material AS MA ON Z.material = MA.id'+
        ' WHERE Z.nombre LIKE %?%'+
        ' OR Z.precio = ?'+
        ' OR T.tipo LIKE %?%'+
        ' OR M.marca LIKE %?%'+
        ' OR C.color LIKE %?%'+
        ' OR MA.material LIKE %?%', [filter], 
        function(error, result){
           if(error){
                throw error;
           }else{
                console.log(result);
                return result;
           }
       }
    );
}


getShoesOnSale = () =>{
    var query = connection.query(
        'SELECT Z.nombre, Z.precio, Z.ano,Z.oferta,Z.disponible,Z.ecologica,Z.fechaCarga,Z.descripcion,'+ 
        ' T.tipo, M.marca, C.color, MA.material'+
        ' FROM Productos AS Z '+
        ' JOIN Tipo AS T ON Z.tipo = T.id'+
        ' JOIN Marca AS M ON Z.marca = M.id'+ 
        ' JOIN Color AS C ON Z.color = C.id'+
        ' JOIN Material AS MA ON Z.material = MA.id'+
        ' WHERE Z.oferta != 0', [], 
        function(error, result){
           if(error){
               throw error;
           }else{
                console.log(result);
                return result;
           }
       }
    );
}




addPurchase = (idCompra,idZapatilla,cliente) =>{
    var query = connection.query(
        'INSERT INTO resumen (idCompra,idProducto, cliente) VALUES (?,?,?)', [idCompra,idZapatilla,cliente], 
        function(error, result){
           if(error){
               throw error;
           }else{
                console.log(result);
                return result;
           }
       }
    );
}


getImageForProduct = (idProducto) =>{
    var query = connection.query(
        'SELECT * FROM imagenesProductos WHERE idProducto = ?', [idProducto], 
        function(error, result){
           if(error){
               throw error;
           }else{
                console.log(result);
                return result;
           }
       }
    );
}


getShoesForMarca = (idMarca) =>{
    var query = connection.query(
        'SELECT Z.nombre, Z.precio, Z.ano,Z.oferta,Z.disponible,Z.ecologica,Z.fechaCarga,Z.descripcion,'+ 
        ' T.tipo, M.marca, C.color, MA.material'+
        ' FROM Productos AS Z '+
        ' JOIN Tipo AS T ON Z.tipo = T.id'+
        ' JOIN Marca AS M ON Z.marca = M.id'+ 
        ' JOIN Color AS C ON Z.color = C.id'+
        ' JOIN Material AS MA ON Z.material = MA.id'+
        ' WHERE Z.Marca = ? ', [idMarca], 
        function(error, result){
           if(error){
               throw error;
           }else{
                console.log(result);
                return result;
           }
       }
    );
}


getShoesForType = (idTipo) =>{
    var query = connection.query(
        'SELECT Z.nombre, Z.precio, Z.ano,Z.oferta,Z.disponible,Z.ecologica,Z.fechaCarga,Z.descripcion,'+ 
        ' T.tipo, M.marca, C.color, MA.material'+
        ' FROM Productos AS Z '+
        ' JOIN Tipo AS T ON Z.tipo = T.id'+
        ' JOIN Marca AS M ON Z.marca = M.id'+ 
        ' JOIN Color AS C ON Z.color = C.id'+
        ' JOIN Material AS MA ON Z.material = MA.id'+
        ' WHERE Z.Tipo = ?', [idTipo],
        function(error, result){
           if(error){
                throw error;
           }else{
                console.log(result);
                return result;
           }
       }
    );
}


getShoesForMaterial = (idMaterial) =>{
    var query = connection.query(
        'SELECT Z.nombre, Z.precio, Z.ano,Z.oferta,Z.disponible,Z.ecologica,Z.fechaCarga,Z.descripcion,'+ 
        ' T.tipo, M.marca, C.color, MA.material'+
        ' FROM Productos AS Z '+
        ' JOIN Tipo AS T ON Z.tipo = T.id'+
        ' JOIN Marca AS M ON Z.marca = M.id'+ 
        ' JOIN Color AS C ON Z.color = C.id'+
        ' JOIN Material AS MA ON Z.material = MA.id'+
        ' WHERE Z.Material = ?', [idMaterial],
        function(error, result){
           if(error){
                throw error;
           }else{
                console.log(result);
               return result;
           }
       }
    );
}



getShoesForTalle = (idTalle) =>{
    var query = connection.query(
        'SELECT Z.nombre, Z.precio, Z.ano,Z.oferta,Z.disponible,Z.ecologica,Z.fechaCarga,Z.descripcion,'+ 
        ' T.tipo, M.marca, C.color, MA.material'+
        ' FROM Productos AS Z '+
        ' JOIN Tipo AS T ON Z.tipo = T.id'+
        ' JOIN Marca AS M ON Z.marca = M.id'+ 
        ' JOIN Color AS C ON Z.color = C.id'+
        ' JOIN Material AS MA ON Z.material = MA.id'+
        ' WHERE Z.Talle = ?', [idTalle],
        function(error, result){
           if(error){
                throw error;
           }else{
                console.log(result);
                return result;
           }
       }
    );
}


getShoesForColor = (idColor) =>{
    var query = connection.query(
        'SELECT Z.nombre, Z.precio, Z.ano,Z.oferta,Z.disponible,Z.ecologica,Z.fechaCarga,Z.descripcion,'+ 
        ' T.tipo, M.marca, C.color, MA.material'+
        ' FROM Productos AS Z '+
        ' JOIN Tipo AS T ON Z.tipo = T.id'+
        ' JOIN Marca AS M ON Z.marca = M.id'+ 
        ' JOIN Color AS C ON Z.color = C.id'+
        ' JOIN Material AS MA ON Z.material = MA.id'+
        ' WHERE Z.Color = ?', [idColor],
        function(error, result){
           if(error){
                throw error;
           }else{
                console.log(result);
                return result;
           }
       }
    );
}

module.exports = { getAll, getZapatillaporId,getMaterials,getColors ,getMarcas,getTipos,getOnSale,finishPurchase,getImage,getShoesForMarcas,getShoesForTypes,getShoesForMaterials,getShoesForTalles, getShoesForColors}

//connection.end();