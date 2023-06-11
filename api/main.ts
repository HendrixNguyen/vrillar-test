import express, {urlencoded} from 'express'
import cors from 'cors'

import {PORT} from "../conf";
import {router} from "./router";
import {connectDb} from "../db_connector/schemas";

const app = express()

app.use(cors())
app.use(urlencoded({extended: false}))

connectDb().catch((e) => console.error(e))

app.get('/ping', (req, res) => res.status(200).send('Services is survive'))

app.use('/', router)

app.listen(PORT, () => {
    console.log(`service is listening on port ${PORT}`)
})
