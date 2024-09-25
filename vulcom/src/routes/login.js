import { Router } from 'express'
const router = Router()

/* GET home page. */
router.get('/login', function (req, res) {
  res.render('sql_injection/login', { title: 'Express' })
})

export default router
