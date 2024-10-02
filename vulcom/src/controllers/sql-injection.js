import conn from '../database/db.js'

const controller = {};


controller.processLogin = async function(req, res) {
  try{
    // Usando concatenação de valores em SQL de forma insegura para reproduzir SQL Injection
    const sql = `select * from users where username = '${req.body.username}' and password = '${req.body.password}'`
    
    console.log('-'.repeat(80))
    console.log(sql)
    console.log('-'.repeat(80))
    const result = await conn.query(sql)

    if(result.rowCount > 0) res.render('sql-injection/success', { title: 'Autenticado'})
    else res.render('sql-injection/login', {
      title: 'Autentique-se',
      username: req.body.username,
      password: req.body.password,
      message: 'Usuário ou senha inválidos'
    })
  } catch(error) {
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