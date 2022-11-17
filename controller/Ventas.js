const { response } = require('express')
const ventas = require('../models/Ventas')

const getVentas = async (req, res = response) => {
    // const { nombre, raza, peso } = req.query
    const pedido = await ventas.find()
    res.json({
        msg: 'GET API ventas',
        pedido
    })
}

const postVentas = async (req, res) => {
    //Desestructuracion
    const { nombreUsuario, ProductosPedido, Precio, Fecha } = req.body

    //recibir parametros y desestructurarlos 
    // instanciar el objeto con los parametros y recibirlos
    const Venta = new ventas({ nombreUsuario, ProductosPedido, Precio,  Fecha })


    await Venta.save()

    res.json({
        msg: 'POST API ventas',
        Venta
    })
}


const deleteVentas = async(req,res) =>{
    const  { nombreUsuario } =req.query
    const Venta = await ventas.findOneAndDelete({nombreUsuario : nombreUsuario})

    res.json({
        msg: 'Delete api Ventas',
        Venta
    })
}


const putVentas = async (req,res) => {

    const {nombreUsuario, nombrenew, ProductosPedido, Precio, Fecha} = req.body
    const modificar = await Produc.findOneAndUpdate({nombreUsuario : nombreUsuario}, {nombre: nombrenew, ProductosPedido:ProductosPedido , Precio : Precio, Fecha : Fecha})

    res.json({
        msg:'Put api Ventas',
        modificar
    })

}


module.exports = {
    getVentas,
    postVentas,
    deleteVentas,
    putVentas
}