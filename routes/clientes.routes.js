import express from "express";
import clientesController from "../controllers/clientesController";

const router = express.Router();

router.post("/mis-clientes", clientesController.MisClientes);
router.post("/nuevo-cliente", clientesController.NuevoCliente);
router.delete("/eliminar/:c_id", clientesController.EliminarCliente);

module.exports = router;
