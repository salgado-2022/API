const {Schema, model} = require('mongoose')

const Pedidos = Schema({
    nombreUsuario:{
        type: String
    },
    ProductosPedido:{
        type: String
    },
    Precio:{
        type: Number
    }
})

module.exports = model('Pedido',Pedidos)