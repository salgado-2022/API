const {Router} = require('express')
const router = Router()

const { getPedido, postPedido } = require('../controller/pedido')

router.get('/',getPedido)
router.post('/', postPedido )



module.exports = router