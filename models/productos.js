const {Schema, model} = require('mongoose')

const Productos = Schema({
    nombre:{
        type: String
    },
    Descripcion:{
        type: String
    },
    Precio:{
        type: Number
    }
})

module.exports = model('productos',Productos)