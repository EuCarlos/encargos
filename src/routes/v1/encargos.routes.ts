const express = require('express')
const router = express.Router()

import EncargoController from '@controllers/v1/EncargoController'

router
    .post('/', EncargoController.create)
    .get('/', EncargoController.show)
    .get('/:encargoId', EncargoController.index)
    .put('/:encargoId', EncargoController.update)
    .delete('/:encargoId', EncargoController.destroy)

module.exports = router
