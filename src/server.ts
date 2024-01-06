import express from 'express'
import cors from 'cors'

import { Routes } from './routes/routes'

export const app = express()

app.use(Routes)

app.use(express.json())

app.use(cors())


app.listen(3333)