const router = Router()

router.get('/', controller.login)
//router.post('/', controller.processLoginSqlInjection)
router.post('/', controller.processLogin)

export default router