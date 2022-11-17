const express = require("express")
const cors = require('cors')
const dbConnection = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.pedidoPath = "/api/pedido"
        this.productosPath = "/api/productos"
        this.ventaPath = "/api/ventas"
        this.middlewares()
        this.routes()
        this.dbConectar()
    }
    async dbConectar(){
        await dbConnection()
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.static("public"))
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.pedidoPath, require("../routes/pedidos"))
        this.app.use(this.productosPath, require("../routes/productos"))
        this.app.use(this.ventaPath, require("../routes/ventas"))
    }

    listen(){

        this.app.listen(this.port,()=>{
            console.log(`Escuchando desde http://localhost:${this.port}`)
        })
    }

}

module.exports = Server