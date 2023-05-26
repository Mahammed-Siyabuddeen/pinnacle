import express from 'express'
import { registerToEvent } from '../controller/user.js'

const router = express.Router()

router.post('/registerToEvent', registerToEvent)

export default router