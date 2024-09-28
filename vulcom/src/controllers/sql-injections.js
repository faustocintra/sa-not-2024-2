import sql from "../database/db";

const controller = {};

controller.login = (req, res) => {
  res.render("sql-injection/login", {
    title: "Autentique-se",
    username: "",
    password: "",
    message: "",
  });
};

controller.processLogin = async (req, res) => {
  try {
    // Usando concatenação de valores em SQL de forma insegura para reproduzir SQL Injection
    const result = await sql([
      `select * from users where username = '${req.body.username}' and password = '${req.body.password}'`,
    ]);

    if (result) {
      res.render("sql-injection/success", { title: "Autenticado" });
    } else {
      res.render("sql-injection/login", {
        title: "Autentique-se",
        username: req.body.username,
        password: req.body.password,
        message: "Usuário ou senha inválidos",
      });
    }
  } catch (e) {
    console.error(error);
    res.render("sql-injection/login", {
      title: "Autentique-se",
      username: req.body.username,
      password: req.body.password,
      message: error.message,
    });
  }
};

export default controller;
