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
    const sql = `
        select * from users 
        where username = $1 
        and password = $2
    `
    const params  = [
        req.body.username, 
        req.body.password
    ]

    /**
     * Usando concatenação de valores
     * em SQL de forma insegura para
     * reproduzir SQL Injection.
     */
    try {
        console.log('-'.repeat(80))
        console.log(sql)
        console.log('-'.repeat(80))

        /**
         * Consulta é feita mesclando 
         * o texto do sql com os 
         * parâmetros de forma segura
         */
        const result = await conn.query(sql, params)
        if(result.rowCount > 0) res.render(
            'sql-injection/success', { title: 'Autenticado'}
        )
        else res.render(
            'sql-injection/login', { 
                title: 'Autentique-se', 
                username: req.body.username, 
                password: req.body.password, 
                message: 'Usuário ou senha inválidos'
            }
        )
    } catch (error) {
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