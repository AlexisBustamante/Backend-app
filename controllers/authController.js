import pool from "../database/keys";

const authentication = {};

authentication.signIn = async (req, res) => {
  const { email, password } = req.body;

  //console.log(req.body);

  try {
    const usuario = await (
      await pool.query(
        "SELECT * FROM usuarios where usr_email=$1 AND usr_password=$2",
        [email, password]
      )
    ).rows;

    if (usuario.length > 0) {
      res.status(200).json({
          
            id_usr:usuario[0].id_usr,
            usr_name:usuario[0].usr_name,
            usr_email:usuario[0].usr_email
        })
    } else {
      res.status(400).json({
        message: "Usuario no Existe o la contraseña es incorrecta",
        NotFound: true,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ocurrio un error",
      error,
    });
  }
};

module.exports = authentication;
