import mongoose from "mongoose";

// Conectar a MongoD
export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost/turing-ia");
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.error(error);
    }
}
