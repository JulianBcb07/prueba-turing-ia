import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getPaquetes, getPaquete, createPaquete, updatePaquete, deletePaquete } from "../controllers/paquetes.controller.js";
import { validateSchema } from "../middlewares/validateAuth.js";
import { createPaqueteSchema, updatePaqueteSchema } from "../schemas/paquete.schema.js";


const router = Router();

// Ver paquetes disponibles
router.get("/paquetes", authRequired, getPaquetes, (req, res) => {

    res.send("Mostrando paquetes");
});

// Ver un paquete en específico
router.get("/paquetes/:id", authRequired, getPaquete, (req, res) => {
    res.send("Mostrando paquetes");
});

// Crear un nuevo paquete
router.post("/paquetes", authRequired, validateSchema(createPaqueteSchema), createPaquete, (req, res) => {
    res.send("Mostrando paquetes");
});

// Actualizar un paquete
router.put("/paquetes/:id", authRequired, validateSchema(updatePaqueteSchema), updatePaquete, (req, res) => {
    res.send("Mostrando paquetes");
});

router.delete("/paquetes/:id", authRequired, deletePaquete, (req, res) => {
    res.send("Mostrando paquetes");
});

export default router;