const controller = {}
controller.login = function(req, res) {
  res.render('sql-injection/login', {
    title: 'Autentique-se',
    username: '',
    password: '',
    message: ''
  })
}
export default controller