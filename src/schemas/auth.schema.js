import { z } from 'zod';

// el req.body es un objeto por lo que se solicita un objeto
export const registerSchema = z.object({
    username: z.string({
        required_error: "El usuario es requerido"
    }),
    email: z.string({
        required_error: "El email es requerido"
    }).email({
        message: "El email no es valido"
    }),
    password: z.string({
        required_error: "La contraseña es requerida"
    }).min(6, {
        message: "La contraseña debe tener minimo 6 caracteres"
    })
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "El email es requerido"
    }).email({
        message: "El email no es valido"
    }),
    password: z.string({
        required_error: "La contraseña es requerida"
    }).min(6, {
        message: "La contraseña debe tener minimo 6 caracteres"
    })
});