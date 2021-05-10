import pool from "../database/keys";
const clientes = {};


clientes.MisClientes = async (req, res) => {
  const { id_usr } = req.body;
//  console.log(req.body);
  try {
    const clientes = await (
      await pool.query(
        `
    select c_id,c_nombre, c_apellidos, c_email, c_telefono, c_direccion
    from clientes
    WHERE usr_id=$1;`,
        [id_usr]
      )
    ).rows;

   // console.log(clientes);
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({
      message: "Ocurrio un Error",
      error,
    });
  }
};


clientes.NuevoCliente = async (req, res) => {

console.log(req.body);
  const { usr_id, c_nombre, c_apellidos, c_direccion, c_telefono, c_email } = req.body;
  
  try {
    

    await pool.query(
      `INSERT INTO clientes(
	    usr_id, c_nombre, c_apellidos, c_email, c_telefono, c_direccion)
	    VALUES ($1, $2, $3, $4, $5, $6)`,
      [usr_id, c_nombre, c_apellidos, c_email, c_telefono, c_direccion]
    );


        const cliente = await (
          await pool.query(`SELECT * FROM clientes order by c_id DESC LIMIT 1`)
        ).rows[0];

    res.status(200).json({
      message: "Cliente creado correctamente",
      cliente,
    });

  } catch (error) {

    res.status(500).json({
      message: "ocurrio un error",
      error
    });
  }


};


clientes.EliminarCliente = async (req, res) => {
console.log(req.params.c_id);
//  const id = req.params.c_id;

}


module.exports = clientes;
