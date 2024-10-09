import conn from '../database/db.js'

const controller = {}

controller.login = function(req, res) {
  res.render('sql-injection/login', {
    title: 'Autentique-se',
    username: '',
    password: '',
    message: ''
  })
}

controller.processLogin = async function(req, res) {
  try{
    // Usando concatenação de valores em SQL de forma
    // insegura para reproduzir SQL Injection

    const sql = `select * from users where username = '${req.body.username}' and passaword = '${req.body.username}'`

    console.log('_')
    console.log
    console.log


    const result = await sql([
      `select * from users where username = '${req.body.username}'
      and password = '${req.body.password}'`
    ])

    if(result) res.render('sql-injection/success', { title: 'Autenticado' })
    else res.render('sql-injection/login', {
      title: 'Autentique-se',
      username: req.body.username,
      password: req.body.password,
      message: 'Usuário ou senha inválidos'
    })
  }
  catch(error) {
    console.error(error)
    res.render('sql-injection/login', {
      title: 'Autentique-se',
      username: req.body.username,
      password: req.body.password,
      message: error.message
    })
  }
}


controller.processLogin = async function(req, res) {
  try{
    // Usando concatenação de valores em SQL de forma
    // insegura para reproduzir SQL Injection

    const sql = `select * from users where username = $1 and password = $2`
    const params = [req.body]

    console.log('_')
    console.log
    console.log


    const result = await sql([
      `select * from users where username = '${req.body.username}'
      and password = '${req.body.password}'`
    ])

    if(result) res.render('sql-injection/success', { title: 'Autenticado' })
    else res.render('sql-injection/login', {
      title: 'Autentique-se',
      username: req.body.username,
      password: req.body.password,
      message: 'Usuário ou senha inválidos'
    })
  }
  catch(error) {
    console.error(error)
    res.render('sql-injection/login', {
      title: 'Autentique-se',
      username: req.body.username,
      password: req.body.password,
      message: error.message
    })
  }
}

export default controller