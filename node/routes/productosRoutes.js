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


    app.get('/productos/getMarcas', (req, res) => {
        let marca = productosServices.getMarcas();

        res.send(marca)
    });


    app.get('/productos/getTipos', (req, res) =>{
        let tipos = productosServices.getTipos();

        res.send(tipos);
    });


    app.get('/productos/getMaterials', (req, res) =>{
        let matirials = productosServices.getMaterials();

        res.send(matirials);
    });


    app.get('/productos/getColors', (req, res) => {
        let colors = productosServices.getColors();

        res.send(colors);
    });


    app.get('/productos/getImage', (req, res) =>{
        let image = productosServices.getImage();

        res.send(image);
    });






    app.get('/productos/getOnSale', (req, res) =>{   
      
        const sentencia='select * from productos p join imagenesproductos i on p.id = i.idProducto where oferta <> 0 group by p.id';
        connection.query(sentencia,(error, resultado)=>{
             if(error) throw error;

             if(resultado.length>0){
                 res.json(resultado);
             }else{
                res.send('sin resultados');
             } 

         } )
    });

    /*app.get('/productos/getZapatillaporId/:idproducto', (req, res) =>{   
        const {idproducto}= req.params
        const sentencia='SELECT z.id , Z.nombre, Z.precio, Z.ano, z.oferta, Z.disponible, Z.ecologica, z.fechaCarga, Z.descripcion, z.tipo, z.marca, z.color, z.material FROM Productos AS Z  WHERE id ='+idproducto;
        connection.query(sentencia,(error, resultado)=>{
             if(error) throw error;

             if(resultado.length>0){
                 res.json(resultado);
             }else{
                res.send('sin resultados');

             } 

         } )
    });*/


    app.get('/productos/getZapatillaporId/:idproducto', (req, res) =>{   
        let productId=req.params.idproducto;
        var query = connection.query('SELECT z.id , Z.nombre, Z.precio, Z.ano, z.oferta, Z.disponible, Z.ecologica, z.fechaCarga, Z.descripcion,'+
            'z.tipo, z.marca, z.color, z.material FROM Productos AS Z  WHERE id = ?', [productId], 
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
        var query = connection.query('select talle, stock from talle where idproducto = ?', [productId], 
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

    /*app.post('/productos/create', (req, res) => {

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