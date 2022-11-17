const {Router} = require('express')
const router = Router()

const { getVentas, postVentas, deleteVenta, putVenta , patchVenta} = require('../controller/ventas')

router.get('/',getVentas)
router.post('/', postVentas )
router.delete('/',deleteVenta)
router.put('/',putVenta)
router.patch('/',patchVenta)



module.exports = router