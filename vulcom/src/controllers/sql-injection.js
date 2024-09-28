import sql from "../database/db"


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
        //usado concatenação de valores em SQL de forma insegura para reproduzir SQL Injection
        const result = await ([sql`SELECT * FROM users WHERE username = '${req.body.username} AND password = ${req.body.password}'`])
        console.log(result)
        if(result){
            res.render('sql-injection/login', {
                title: 'Autenticado'
            })
        } else {
            res.render('sql-injection/login', {
                title: 'Autentique-se',
                username: req.body.username,
                password: req.body.password,
                message: 'Usuário ou senha inválidos'
            })
        }
    } catch(error){
        console.error(error)
        res.render('sql-injection/login', {
            title: 'Autentique-se',
            username: req.body.username,
            password: req.body.password,
            message: error.message
          })
    }
}

//   const { username, password } = req.body
//   const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`
//   const users = await sql`
//     ${query}
//   `
//   if (users.length === 0) {
//     res.render('sql-injection/login', {
//       title: 'Autentique-se',
//       username,
//       password,
//       message: 'Usuário ou senha inválidos'
//     })
//   } else {
//     res.render('sql-injection/welcome', {
//       title: 'Bem-vindo',
//       username
//     })
//   }
// }

export default controller