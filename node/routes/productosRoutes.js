//se importa el archivo productoServices
const productosServices = require('../services/productosServices');

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



//a este modulo lo va a llamar el index y le va a pasar express
module.exports = (app) => {
    app.get(
        //cuando se llame a esta url, se ejecuta este método
        '/productos/getAll', (req, res) => {

            //se guarda la zapatillas que se buscó en el input
            var valorBusqueda = req.query.zapatilla;

            //se llama al metodogetAll de Servicios y se coloca el resultado en la variable
            let productos = productosServices.getAll(valorBusqueda);

            //se envia como respuesta los productos
            res.send(productos);
        }
    );
    //y si se busca por id, se ejecuta este método.
    app.get('/productos/getById/:id', (req, res) => {
        //se llama al método q busca x id del archivo productoSErvicios y se le pasa el id
        let producto = productosServices.getById(req.params.id);

        //se responde con ese producto
        res.send(producto);
    });


    /*NEW GETS*/ 


    app.get('/productos/getProductsForMarca/:marca', (req, res) => {
        let marcas = req.params.marca;
        var query = connection.query(' SELECT P.id, P.nombre, P.precio, P.ano,P.oferta,P.disponible,P.ecologica,P.fechaCarga,P.descripcion,'+
        'T.tipo, M.marca, C.color, MA.material, I.link'+
        ' FROM Productos AS P'+
        ' JOIN Tipo AS T ON P.tipo = T.id'+
        ' JOIN Marca AS M ON P.marca = M.id'+
        ' JOIN Color AS C ON P.color = C.id'+
        ' JOIN Material AS MA ON P.material = MA.id'+
        ' JOIN Imagenesproductos AS I'+
        ' ON P.id = I.idProducto'+
        ' WHERE P.Marca = ?'+
        ' GROUP BY P.id', [marcas],
        function(error, result){
            if(error){
                 throw error;
            }else{
                 console.log(result);
                 res.json(result);
            }
        }
     );         
    });

    app.get('/productos/getProductsForMatirial/:material', (req, res) =>{
        let materiales = req.params.material;
        var query = connection.query('SELECT P.id,P.nombre, P.precio, P.ano,P.oferta,P.disponible,P.ecologica,P.fechaCarga,P.descripcion,'+ 
        ' T.tipo, M.marca, C.color, MA.material, I.link'+
        ' FROM Productos AS P '+
        ' JOIN Tipo AS T ON P.tipo = T.id'+
        ' JOIN Marca AS M ON P.marca = M.id'+ 
        ' JOIN Color AS C ON P.color = C.id'+
        ' JOIN Material AS MA ON P.material = MA.id'+
        ' JOIN Imagenesproductos AS I ON P.id = I.idProducto'+
        ' WHERE P.Material = ?'+
        ' GROUP BY P.id', [materiales],
        function(error, result){
            if(error){
                 throw error;
            }else{
                 console.log(result);
                 res.json(result);
            }
        }
     );   
    });

    app.get('/productos/getProductsForColor/:color', (req,res) =>{
        let colores = req.params.color;
        var query = connection.query('SELECT P.id, P.nombre, P.precio, P.ano,P.oferta,P.disponible,P.ecologica,P.fechaCarga,P.descripcion,'+ 
        'T.tipo, M.marca, C.color, MA.material, I.link'+
        ' FROM Productos AS P'+
        ' JOIN Tipo AS T ON P.tipo = T.id'+
        ' JOIN Marca AS M ON P.marca = M.id'+
        ' JOIN Color AS C ON P.color = C.id'+
        ' JOIN Material AS MA ON P.material = MA.id'+
        ' JOIN Imagenesproductos AS I ON P.id = I.idProducto'+
        ' WHERE P.Color = ?'+
        ' GROUP BY P.id', [colores],
        function(error, result){
            if(error){
                 throw error;
            }else{
                 console.log(result);
                 res.json(result);
            }
        }
     );  
    });

    app.get('/productos/getProductsForType/:tipo', (req, res) =>{
        let tipos = req.params.tipo;
        var query = connection.query('SELECT P.id, P.nombre, P.precio, P.ano,P.oferta,P.disponible,P.ecologica,P.fechaCarga,P.descripcion,'+
        ' T.tipo, M.marca, C.color, MA.material, I.link'+
        ' FROM Productos AS P'+
        ' JOIN Tipo AS T ON P.tipo = T.id'+
        ' JOIN Marca AS M ON P.marca = M.id'+ 
        ' JOIN Color AS C ON P.color = C.id'+
        ' JOIN Material AS MA ON P.material = MA.id'+
        ' JOIN Imagenesproductos AS I ON P.id = I.idProducto'+
        ' WHERE P.Tipo = ?'+
        ' GROUP BY P.id', [tipos],
        function(error, result){
            if(error){
                 throw error;
            }else{
                 console.log(result);
                 res.json(result);
            }
        }
     );   
    });

    app.get('/productos/getProductsForTalle/:talle', (req, res) => {
        let talles = req.params.talle;
        var query = connection.query('SELECT P.id,P.nombre, P.precio, P.ano,P.oferta,P.disponible,P.ecologica,P.fechaCarga,P.descripcion,'+
        'T.tipo, M.marca, C.color, MA.material, I.link'+
        ' FROM Productos AS P'+
        ' JOIN Tipo AS T ON P.tipo = T.id'+
        ' JOIN Marca AS M ON P.marca = M.id'+
        ' JOIN Color AS C ON P.color = C.id'+
        ' JOIN Material AS MA ON P.material = MA.id'+
        ' JOIN Imagenesproductos AS I ON P.id = I.idProducto'+
        ' JOIN Talle AS TA ON P.id = TA.idProducto'+
        ' WHERE TA.talle = ?'+
        ' GROUP BY P.id', [talles],
        function(error, result){
            if(error){
                 throw error;
            }else{
                 console.log(result);
                 res.json(result);
            }
        }
     );   
    });

    app.get('/productos/getAllTalles/', (req, res) => {
        var query = connection.query('SELECT T.idProducto, T.talle, T.stock FROM Talle AS T'+
        ' GROUP BY T.talle', [],
        function(error, result){
            if(error){
                 throw error;
            }else{
                 console.log(result);
                 res.json(result);
            }
        }
     );   
    });

    app.get('/productos/getAllMarcas/', (req, res) => {
        var query = connection.query('SELECT M.id, M.marca FROM Marca AS M', [],
        function(error, result){
            if(error){
                 throw error;
            }else{
                 console.log(result);
                 res.json(result);
            }
        }
     );   
    });

    app.get('/productos/getAllTipos/', (req, res) => {
        var query = connection.query('SELECT T.id, T.tipo FROM Tipo AS T', [],
        function(error, result){
            if(error){
                 throw error;
            }else{
                 console.log(result);
                 res.json(result);
            }
        }
     );   
    });

    app.get('/productos/getAllColors/', (req, res) => {
        var query = connection.query('SELECT C.id, C.color FROM Color AS C', [],
        function(error, result){
            if(error){
                 throw error;
            }else{
                 console.log(result);
                 res.json(result);
            }
        }
     );   
    });

    app.get('/productos/getAllMatirials/', (req, res) => {
        var query = connection.query('SELECT M.id, M.material FROM Material AS M', [],
        function(error, result){
            if(error){
                 throw error;
            }else{
                 console.log(result);
                 res.json(result);
            }
        }
     );   
    });

    app.get('/productos/getAllTheProducts/',(req, res) =>{
        var query = connection.query('SELECT P.id ,P.nombre, P.precio, P.ano,P.oferta,P.disponible,P.ecologica ,P.fechaCarga,P.descripcion,'+ 
        'T.tipo, M.marca, C.color, MA.material, I.link'+
        ' FROM Productos AS P'+
        ' JOIN Tipo AS T ON P.tipo = T.id'+
        ' JOIN Marca AS M ON P.marca = M.id'+
        ' JOIN Color AS C ON P.color = C.id'+
        ' JOIN Material AS MA ON P.material = MA.id'+
        ' JOIN imagenesproductos AS I'+
        ' ON P.id = I.idProducto', [],
        function(error, result){
            if(error){
                 throw error;
            }else{
                 console.log(result);
                 res.json(result);
            }
        }
     );    
    });

    app.get('/productos/getImagenesPorId/:idproducto', (req, res) =>{
        let productId=req.params.idproducto;
        var query = connection.query('SELECT * FROM imagenesproductos AS I where idProducto = ? GROUP BY I.idProducto ', [productId], 
            function(error, result){
               if(error){
                    throw error;
               }else{
                    console.log(result);
                    res.json(result);
               }
           }
        );    
    });
    


    app.get('/productos/getOnSale', (req, res) =>{  
        var query = connection.query('SELECT P.id , P.nombre, P.precio, P.ano, P.oferta, P.disponible, P.ecologica, P.fechaCarga, P.descripcion,'+
            'P.tipo, P.marca, P.color, P.material, I.link'+
            ' FROM Productos AS P'+
            ' JOIN imagenesproductos AS I'+
            ' ON P.id = I.idProducto'+
            ' WHERE P.oferta > 0'+
            ' GROUP BY P.id', [],
        function(error, result){
            if(error){
                 throw error;
            }else{
                 console.log(result);
                 res.json(result);
            }
        }
     );           
    });    



    app.get('/productos/getZapatillaporId/:idproducto', (req, res) =>{   
        let productId=req.params.idproducto;
        var query = connection.query('SELECT P.id , P.nombre, P.precio, P.ano, P.oferta, P.disponible, P.ecologica, P.fechaCarga, P.descripcion,'+
            'T.tipo, P.marca, P.color, M.material'+
            ' FROM Productos AS P'+ 
            ' JOIN Tipo AS T ON P.tipo = T.id'+
            ' JOIN Material AS M ON P.material = M.id'+
            ' WHERE P.id = ?', [productId], 
        function(error, result){
               if(error){
                    throw error;
               }else{
                    console.log(result);
                    res.json(result);
               }
           }
        );           
    });
    

    app.get('/productos/getTallesporId/:idproducto', (req, res) =>{
        let productId=req.params.idproducto;
        var query = connection.query('SELECT T.idProducto, T.talle, T.stock from Talle AS T where idproducto = ?', [productId], 
            function(error, result){
               if(error){
                    throw error;
               }else{
                    console.log(result);
                    res.json(result);
               }
           }
        );           
    });



    app.get('/productos/getProductosMasVendidos', (req,res)=>{
        var query = connection.query('SELECT P.id , P.nombre, P.precio, P.ano, P.oferta, P.disponible, P.ecologica, P.fechaCarga, P.descripcion,'+
        'P.tipo, P.marca, P.color, P.material, I.link'+
        ' FROM Productos AS P'+
        ' JOIN imagenesproductos AS I'+
        ' ON P.id = I.idProducto'+
        ' WHERE P.disponible = 1'+
        ' GROUP BY P.id',[],
            function(error, result){
                if(error){
                    throw error;
                }else{
                    console.log(result);
                    res.json(result);
            }
            }
        );
    });


    app.get('/productos/getProductosForBuscador/:valorBusqueda', (req,res)=>{
        let valor = req.params.valorBusqueda;
        let valorLike = '%'+valor+'%';
        var query = connection.query('SELECT P.nombre, P.precio, P.ano,P.oferta,P.disponible,P.ecologica,P.fechaCarga,P.descripcion,'+ 
        'T.tipo, M.marca, C.color, MA.material, I.link'+
        ' FROM Productos AS P '+
        ' JOIN Tipo AS T ON P.tipo = T.id'+
        ' JOIN Marca AS M ON P.marca = M.id'+ 
        ' JOIN Color AS C ON P.color = C.id'+
        ' JOIN Imagenesproductos AS I ON P.id = I.idProducto'+
        ' JOIN Material AS MA ON P.material = MA.id'+
        ' WHERE P.nombre LIKE ?'+
        ' OR T.tipo LIKE ?'+
        ' OR M.marca LIKE ?'+
        ' OR C.color LIKE ?'+
        ' OR MA.material LIKE ?',[valorLike,valorLike,valorLike,valorLike,valorLike],
            function(error, result){
                if(error){
                    throw error;
                }else{
                    console.log(result);
                    res.json(result);
            }
            }
        );
    });


    /*PARA REVISAR
    app.put('/productos/finishPurchase' , (req,res) => {

        let purchase = req.body;

        let pruchaseFinished = productosServices.finishPurchase(purchase);

        res.send(pruchaseFinished);
    });



    app.get('/productos/getShoesForMarcas', (req, res) =>{
        let productsForMarca = productosServices.getShoesForMarcas(req.params.id);

        res.send(productForMarca);
    });

    app.get('/productos/getShoesForColors', (req, res) =>{
        let productsForColors = productosServices.getShoesForColors(req.params.id);

        res.send(productsForColors);
    });


    


    app.get('/productos/getShoesForTypes', (req, res) =>{
        let productsForTypes = productosServices.getShoesForTypes(req.params.id);

        res.send(productsForTypes);
    });


    app.get('/productos/getShoesForMaterials', (req, res) =>{
        let productsForMaterials = productosServices.getShoesForMaterials(req.params.id);

        res.send(productsForMaterials);
    });

    app.post('/productos/create', (req, res) => {

        let producto = req.body;

        let productoCreado = productosServices.createProducto(producto);

        res.send(productoCreado);

    });

    app.put('/productos/edit', (req, res) => {

        let producto = req.body;

        let productoEditado = productosServices.editProducto(producto);

        res.send(productoEditado);

    });

    app.delete('/productos/delete/:id', (req, res) => {
        productosServices.deleteProducto(req.params.id);
        res.send()
    })

    app.post('/confirmar-compra', (req, res) => {
        console.log(req.body);
        res.send();
    })*/
}