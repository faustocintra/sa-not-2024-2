import { Router } from 'express'
import controller from '../controllers/users.js'

const router = Router()

router.get('/', controller.retrieve)

export default router
