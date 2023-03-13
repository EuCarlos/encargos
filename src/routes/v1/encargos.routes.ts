const express = require('express')
const router = express.Router()

import EncargoController from '@controllers/v1/EncargoController'

router
    .post('/', EncargoController.create)
    .get('/', EncargoController.index)
    .get('/:id', EncargoController.show)

module.exports = router
