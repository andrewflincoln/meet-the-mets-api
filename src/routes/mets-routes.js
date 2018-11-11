const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/mets-ctrl')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getOne)
router.post('/', ctrl.create)
router.delete('/:id', ctrl.deletePlayer)
router.put('/:id', ctrl.updatePlayer)


module.exports = router
