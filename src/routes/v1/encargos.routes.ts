const express = require('express')
const router = express.Router()

import EncargoController from '@controllers/v1/EncargoController'

router
    .post('/', EncargoController.create)
    .get('/', EncargoController.show)
    .get('/:encargoId', EncargoController.index)

module.exports = router
