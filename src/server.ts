// imports
import express, { Request, Response } from 'express'
import { print } from './routes/functions/printPaths'
import swaggerUI from 'swagger-ui-express'
import swaggerDocsV1 from './docs/v1/swagger.json'
require("dotenv").config()
import 'reflect-metadata'
import './database'
var bodyParser = require('body-parser')

// routes
const v1Router = require('./routes/v1')
const v1Encargos = require('./routes/v1/encargos.routes')

import { JsonResponse } from './concerns/response'

const PORT = process.env.PORT || 3333

const app = express();

app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

    .get('/', (req: Request, res: Response) => {
        res.sendFile(__dirname + "/views/index.html")
    })

    .use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocsV1 ))
    .use('/api/v1/workouts', v1Router)
    .use('/api/v1/encargos', v1Encargos)

    .use((req, res) => {
        const pathname = req.originalUrl
        const result = new JsonResponse(`Can't found this route: ${pathname}`, false).response()

        res.status(404).json(result);
    })

    .listen(PORT, () => {
        console.log(`🔥 Server is running in PORT ${PORT} - ${process.env.NODE_ENV}`)
    })

console.log("🛣️  ROUTES")
app._router.stack.forEach(print.bind(null, []))

console.log("📚 Documentation is on the route: /api/v1/docs")
