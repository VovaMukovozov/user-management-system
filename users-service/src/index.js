import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { pinoForHttp } from './service/logger'
import { errorHandler, notFoundMiddleware } from './middleware/errorHendler'
import usersRouter from './routes/user'
import { serverConfig } from './config'

const { port, address } = serverConfig
const app = express()

app.use(pinoForHttp)
app.use(bodyParser.json())
app.use(cors())
app.use('/user', usersRouter)
app.use(notFoundMiddleware)
app.use(errorHandler)

export const server = app.listen(port, address, () => {
    console.log(`server is listening on ${ address }, port ${ port }`)
})