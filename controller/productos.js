const { response } = require('express')
const { find } = require('../models/productos')
const productos = require('../models/productos')
const Produc = require('../models/productos')

const getProductos = async (req, res = response) => {
    // const { nombre, raza, peso } = req.query
    const producto = await productos.find()
    res.json({
        msg: 'GET API productos',
        producto
    })
}

const postProductos = async (req, res) => {
    //Desestructuracion
    const { nombre, Descripcion, Precio } = req.body

    //recibir parametros y desestructurarlos 
    // instanciar el objeto con los parametros y recibirlos
    const Productos = new Produc({ nombre, Descripcion, Precio })


    await Productos.save()

    res.json({
        msg: 'POST API Productos',
        Productos
    })
}

const deleteProdcuto = async(req,res)=>{


        const  { nombre } =req.query
        const producto = await Produc.findOneAndDelete({nombre : nombre})

        res.json({
            msg: 'Delete api Productos',
            producto
        })

}

const putProducto = async (req,res) => {

    const {nombre,nombrenew,Descripcion,Precio} = req.body
    const modificar = await Produc.findOneAndUpdate({nombre : nombre}, {nombre: nombrenew, Descripcion:Descripcion , Precio : Precio})

    res.json({
        msg:'Put api Productos',
        modificar
    })

}


const patchProducto = async (req,res) =>{
    const{nombre, Precio} = req.body
    const patch = await Produc.findOneAndUpdate({nombre : nombre},{Precio : Precio})

    res.json({
        msg:'PATCH API PRODUCTOS',
        patch
    })
}

module.exports = {
    getProductos,
    postProductos,
    deleteProdcuto,
    putProducto,
    patchProducto
}