const {Schema, model} = require('mongoose')

const Ventas = Schema({
    nombreUsuario:{
        type: String
    },
    ProductosPedido:{
        type: String
    },
    Precio:{
        type: Number
    },
    Fecha:{
        type: String
    }
})

module.exports = model('Venta',Ventas)