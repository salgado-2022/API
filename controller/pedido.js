const { response } = require('express')
const pedidos = require('../models/pedidos')
const Pedi = require('../models/pedidos')

const getPedido = async (req, res = response) => {
    // const { nombre, raza, peso } = req.query
    const pedido = await pedidos.find()
    res.json({
        msg: 'GET API pedidos',
        pedido
    })
}

const postPedido = async (req, res) => {
    //Desestructuracion
    const { nombreUsuario, ProductosPedido, Precio } = req.body

    //recibir parametros y desestructurarlos 
    // instanciar el objeto con los parametros y recibirlos
    const Pedido = new Pedi({ nombreUsuario, ProductosPedido, Precio })


    await Pedido.save()

    res.json({
        msg: 'POST API Mascota',
        Pedido
    })
}

module.exports = {
    getPedido,
    postPedido
}