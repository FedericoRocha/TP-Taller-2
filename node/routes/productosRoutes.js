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
        let productsOnSale = productosServices.getOnSale();

        res.send(productsOnSale);
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


    app.get('/productos/getShoesForTalles', (req, res) =>{
        let productsForTalles = productosServices.getShoesForTalles(req.params.id);

        res.send(productsForTalles);
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