import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

dotenv.config()


const app = express()

app.use(bodyParser())
app.use(express.static('public'))

app.use('/')

app.listen(process.env.port || 8000, () => console.log('server listening at http://localhost:8000/'))