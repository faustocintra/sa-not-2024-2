import sql from '../database/db.js'

const controller = {}
controller.login = function (req, res) {
    res.render('sql-injection/login', {
        title: 'Autentique-se',
        username: '',
        password: '',
        message: ''
    })
}
controller.processLogin = async function (req, res) {
    const username = req.body.username
    const password = req.body.password
    
    try {

        const result = await sql([`SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`])

        if (result) res.render('sql-injection/login', { title: 'Autentique-se', })
        else res.render('sql-injection/login',
            {
                title: 'Autentique-se',
                username: username,
                password: password,
                message: 'Usário ou senha inválidos'
            })

    } catch (error) {
        console.log(error)
        res.render('sql-injection/login',
            {
                title: 'Autentique-se',
                username: username,
                password: password,
                message: 'Usário ou senha inválidos'
            })

    }

}

export default controller