const {response} = require('express')
const ventas = require('../models/ventas')


const getVentas = async (req, res = response) => {
    // const { nombre, raza, peso } = req.query
    const ConsultaVenta = await ventas.find()
    res.json({
        msg: 'GET API productos',
        ConsultaVenta
    })
}

const postVentas = async (req,res)=>{
    const {nombreUsuario,ProductosPedido,Precio,Fecha} = req.body

    const VentasP = new ventas({nombreUsuario,ProductosPedido,Precio,Fecha})

    await VentasP.save()

    res.json({
        msg: `POST API VENTAS`,
        VentasP
    })
}

const deleteVenta = async(req,res)=>{


    const  { nombreUsuario } =req.query
    const VentasD = await ventas.findOneAndDelete({nombreUsuario : nombreUsuario})

    res.json({
        msg: 'Delete api Ventas',
        VentasD
    })

}

const putVenta = async (req,res) => {

    const {nombreUsuario,nombrenew,ProductosPedido,Precio,Fecha} = req.body
    const modificar = await ventas.findOneAndUpdate({nombreUsuario : nombreUsuario}, {nombreUsuario: nombrenew, ProductosPedido:ProductosPedido , Precio : Precio, Fecha:Fecha})

    res.json({
        msg:'Put api Ventas',
        modificar
    })

}



const patchVenta = async (req,res) =>{
    const{nombreUsuario, ProductosPedido} = req.body
    const patch = await ventas.findOneAndUpdate({nombreUsuario : nombreUsuario},{ProductosPedido : ProductosPedido})

    res.json({
        msg:'PATCH API PRODUCTOS',
        patch
    })
}


module.exports = {
    getVentas,
    postVentas,
    deleteVenta,
    putVenta,
    patchVenta
}