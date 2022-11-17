const {Router} = require('express')
const router = Router()

const { getProductos, postProductos, deleteProdcuto, putProducto, patchProducto } = require('../controller/productos')

router.get('/',getProductos)
router.post('/', postProductos )
router.delete('/', deleteProdcuto )
router.put('/', putProducto )
router.patch('/', patchProducto )




module.exports = router