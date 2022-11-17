const {Router} = require('express')
const router = Router()

const { getVentas, postVentas, deleteVentas } = require('../controller/Ventas')

router.get('/',getVentas)
router.post('/', postVentas ),
router.delete('/',deleteVentas)



module.exports = router