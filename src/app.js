import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

// Se importa el archivo de rutas para poder usarlo en la aplicación
import authRoutes from "./routes/auth.routes.js";
import paquetesRoutes from "./routes/paquetes.routes.js"

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// Se le indica a la aplicación que va a recibir datos en formato JSON
app.use("/api", authRoutes);
app.use("/api", paquetesRoutes);

export default app;