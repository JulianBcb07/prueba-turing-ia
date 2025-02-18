import { z } from 'zod';

export const createPaqueteSchema = z.object({
    name: z.string({
        required_error: "El nombre es requerido"
    }),
    description: z.string({
        required_error: "La descripcion es requerida"
    }).max(200, {
        message: "La descripcion no debe exceder los 200 caracteres"
    }),
    price: z.number({
        required_error: "El precio es requerido"
    }).max(10000, {
        message: "EL precio no debe superar los 10,000 por paquete"
    }),
    img: z.string({
        required_error: "La imagen es requerida"
        // Pendiente al implementar el frontend
    })
});

export const updatePaqueteSchema = z.object({
    name: z.string({
        required_error: "El nombre es requerido"
    }),
    description: z.string({
        required_error: "La descripcion es requerida"
    }).max(200, {
        message: "La descripcion no debe exceder los 200 caracteres"
    }),
    price: z.number({
        required_error: "El precio es requerido"
    }).max(10000, {
        message: "EL precio no debe superar los 10,000 por paquete"
    }),
    img: z.string({
        required_error: "La imagen es requerida"
        // Pendiente al implementar el frontend
    })
});