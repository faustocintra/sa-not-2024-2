import { Router } from 'express'
import controller from '../controllers/users.js'

const router = Router()

router.get('/', controller.retrieve)
router.get('/new', controller.newUser)
router.post('/', controller.upsert)

export default router
