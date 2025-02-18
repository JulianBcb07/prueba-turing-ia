import { Router } from "express";
import { register, login, logout, profile } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validateAuth.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

// La funcion Router de express nos permite crear un objeto al que le vamos a ir agregando rutas
const router = Router();

router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);
router.post('/logout', logout);
router.post('/profile', authRequired, profile);

export default router;