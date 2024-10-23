import { Router } from 'express'
import controller from '../controllers/users.js'

const router = Router()

router.get('/', controller.retrieve)
router.get('/new', controller.new)
export default router