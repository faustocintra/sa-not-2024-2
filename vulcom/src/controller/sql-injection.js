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


controller.processoLogin = async function(req, res) {
    try {
        //Usando concatenaçãi de valores sql de forma insegura para reproduzir sql injection
        const result = await sql([
            `select * from users where username = '${username}'
            and password = '${req.body.password}`
        ])

        if(result.rowCount > 0) res.render('sql-injection/success', { title: 'Autenticado'})
        else res.render('sql-injection/login', {
            title: 'Autentique-se',
            username: req.body.username,
            password: req.body.password,
            message: 'Usuario ou senha invalidos'
        })
    }
    catch(error) {
        console.error(error)
        res.render('sql-injection/login', {
            title: 'Autentique-se',
            username: req.body.username,
            password: req.body.password,
            message: 'Usuario ou senha invalidos'
        })
    }
}

export default controller