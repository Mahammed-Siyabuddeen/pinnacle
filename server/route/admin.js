import express from 'express'
import { checkAuthentication } from '../Middleware/Middleware.js'
import { loginAdmin } from '../controller/admin.js'
const router = express.Router()

router.post('/login', loginAdmin)
router.post('/getEventDetails', checkAuthentication)

export default router