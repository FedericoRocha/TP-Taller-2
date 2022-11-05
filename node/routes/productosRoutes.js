//se importa el archivo productoServices
const productosServices = require('../services/productosServices');

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


    app.get('/productos/getMarcas', (res) => {
        let marca = productosServices.getMarcas();

        res.send(marca)
    });


    app.get('/productos/getTipos', (res) =>{
        let tipos = productosServices.getTipos();

        res.send(tipos);
    });


    app.get('/productos/getMaterials', (res) =>{
        let matirials = productosServices.getMaterials();

        res.send(matirials);
    });


    app.get('/productos/getColors', (res) => {
        let colors = productosServices.getColors();

        res.send(colors);
    });


    app.get('/productos/getImage', (res) =>{
        let image = productosServices.getImage();

        res.send(image);
    });


    app.get('/productos/getOnSale', (res) =>{
        let productsOnSale = productosServices.getOnSale();

        res.send(productsOnSale);
    });


    app.put('/productos/finishPurchase' , (req,res) => {

        let purchase = req.body;

        let pruchaseFinished = productosServices.finishPurchase(purchase);

        res.send(pruchaseFinished);
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