const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')

import { JsonResponse } from '../../concerns/response'

import EncargoController from '@controllers/v1/EncargoController'

router
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

    .get('/', (req, res) => {
        var result = new JsonResponse("Request Successfully", true, {
            name: "Carlos Alves",
            repo: "https://github.com/EuCarlos/boilerplate-ts",
            website: "https://carlosalves.vercel.app/"
        }).response()

        return res.status(200).json(result)
    })

    .get('/encargos/:id', (req, res) => EncargoController.show)
    .get('/encargos', (req, res) => EncargoController.index)
    .post('/encargos', (req, res) => EncargoController.create)

module.exports = router
