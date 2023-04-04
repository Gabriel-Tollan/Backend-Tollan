import express from 'express'
import ProductManager from './Managers/ProductManager.js'


const PORT = 8080;

const productManager = new ProductManager()
const app = express();

app.use(express.urlencoded({extended:true}))

app.listen(PORT, ()=>{
    console.log('Servidor funcionando en el puerto: ' + PORT)
})

app.get('/', async (req,res)=>{
    const products = await productManager.getProducts();
    res.send(products)
})

app.get('/product/:id', async (req,res)=>{
    const id = req.params.id;
    const product = await productManager.getProduct(id);
    res.send(product)
})

app.get('/eliminar/:id', async (req,res)=>{

    const id = req.params.id;

    const msg = await productManager.eliminarProduct(id);
    res.send(msg)
    
})

app.get('/newquery', async (req,res)=>{

    const {nombre, descripcion, precio, categoria } = req.query;

    if(!nombre || !descripcion || !precio || !categoria ){
        res.send('Faltan datos')
        return
    }
    const product = {
        nombre, descripcion, precio, categoria
    }
    const msg = await productManager.crearProduct(product);

    res.send(msg)

})


app.get('/editquery', async (req,res)=>{

    const {id, nombre, descripcion, precio, categoria } = req.query;

    if(!nombre || !descripcion || !precio || !categoria || !id ){
        res.send('Faltan datos')
        return
    }

    const msg = await productManager.modificarProduct(id, nombre,descripcion,precio,categoria);

    res.send(msg)

})