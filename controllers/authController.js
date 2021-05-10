import pool from "../database/keys";

const authentication = {};

authentication.signIn = async (req, res) => {
  const { email, password } = req.body;

  //console.log(req.body);
  
  try {
    const usuario = await (
      await pool.query(
        `SELECT usuarios.id_usr, usuarios.usr_name, usuarios.usr_email, roles_usr.name_rol from usuarios
        JOIN roles_usr ON usuarios.usr_id_rol=roles_usr.id_rol
        where usuarios.usr_email=$1 AND usuarios.usr_password=$2`,
        [email, password]
      )
    ).rows;

    if (usuario.length > 0) {
      res.status(200).json({
            id_usr:usuario[0].id_usr,
            usr_name:usuario[0].usr_name,
            usr_email:usuario[0].usr_email,
            usr_rol:usuario[0].name_rol
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
