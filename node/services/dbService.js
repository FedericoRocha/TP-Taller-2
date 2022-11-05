
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
        'FROM Zapatilla AS Z '+
        'JOIN Tipo AS T ON Z.tipo = T.id'+
        'JOIN Marca AS M ON Z.marca = M.id'+ 
        'JOIN Color AS C ON Z.color = C.id'+
        'JOIN Material AS MA ON Z.material = MA.id', [], 
        function(error, result){
           if(error){
               throw error;
           }else{
               console.log(result);
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
           }
       }
    );
}

getShoeById = (id) =>{
    var query = connection.query(
        'SELECT Z.nombre, Z.precio, Z.ano,Z.oferta,Z.disponible,Z.ecologica.Z.fechaCarga,Z.descripcion,'+ 
        'T.tipo, M.marca, C.color, MA.material'+
        'FROM Zapatilla AS Z '+
        'JOIN Tipo AS T ON Z.tipo = T.id'+
        'JOIN Marca AS M ON Z.marca = M.id'+ 
        'JOIN Color AS C ON Z.color = C.id'+
        'JOIN Material AS MA ON Z.material = MA.id'+
        'WHERE id = ?', [id], 
        function(error, result){
           if(error){
               throw error;
           }else{
               console.log(result);
           }
       }
    );
}


getShoesFiltered = (filter) =>{
    var query = connection.query(
        'SELECT Z.nombre, Z.precio, Z.ano,Z.oferta,Z.disponible,Z.ecologica.Z.fechaCarga,Z.descripcion,'+ 
        'T.tipo, M.marca, C.color, MA.material'+
        'FROM Zapatilla AS Z '+
        'JOIN Tipo AS T ON Z.tipo = T.id'+
        'JOIN Marca AS M ON Z.marca = M.id'+ 
        'JOIN Color AS C ON Z.color = C.id'+
        'JOIN Material AS MA ON Z.material = MA.id'+
        'WHERE Z.nombre LIKE %?%'+
        'OR Z.precio = ?'+
        'OR T.tipo LIKE %?%'+
        'OR M.marca LIKE %?%'+
        'OR C.color LIKE %?%'+
        'OR MA.material LIKE %?%', [filter], 
        function(error, result){
           if(error){
               throw error;
           }else{
               console.log(result);
           }
       }
    );
}


getShoesOnSale = () =>{
    var query = connection.query(
        'SELECT Z.nombre, Z.precio, Z.ano,Z.oferta,Z.disponible,Z.ecologica.Z.fechaCarga,Z.descripcion,'+ 
        'T.tipo, M.marca, C.color, MA.material'+
        'FROM Zapatilla AS Z '+
        'JOIN Tipo AS T ON Z.tipo = T.id'+
        'JOIN Marca AS M ON Z.marca = M.id'+ 
        'JOIN Color AS C ON Z.color = C.id'+
        'JOIN Material AS MA ON Z.material = MA.id'+
        'WHERE Z.oferta = true', [], 
        function(error, result){
           if(error){
               throw error;
           }else{
               console.log(result);
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
           }
       }
    );
}

/*
getShoesOnSale = () =>{
    var query = connection.query(
        '', [], 
        function(error, result){
           if(error){
               throw error;
           }else{
               console.log(result);
           }
       }
    );
}


getShoesOnSale = () =>{
    var query = connection.query(
        '', [], 
        function(error, result){
           if(error){
               throw error;
           }else{
               console.log(result);
           }
       }
    );
}*/

 connection.end();