import pool from '../database/keys';

const authentication = {};

authentication.signIn = async (req, res) => {
    
    const {saludo,nombre} =req.body;
  
   const clientes= await(await pool.query("SELECT * FROM usuarios ")).rows;

   console.log(clientes);


};

module.exports = authentication;