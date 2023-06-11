import express, {urlencoded} from 'express'
import cors from 'cors'

import {PORT} from "../conf";

const app = express()

app.use(cors())
app.use(urlencoded({extended: false}))

app.get('/ping', (req, res) => res.status(200).send('Services is survive'))


app.listen(PORT, () => {
    console.log(`service is listening on port ${PORT}`)
})
