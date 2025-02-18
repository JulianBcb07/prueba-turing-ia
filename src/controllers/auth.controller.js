import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jws.js';

export const register = async (req, res) => {
    const { username, email, password } = req.body;


    try {
        const userFound = await User.findOne({ email })
        if (!userFound) return res.status(400).json(["El correo ya existe"])

        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });

        const userSaved = await newUser.save();

        // Se crea el token de autenticación con el id del usuario
        const token = await createAccessToken({ id: userSaved._id });

        res.cookie("token", token);
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createAt: userSaved.createdAt,
            updateAt: userSaved.updatedAt,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};


export const login = async (req, res) => {

    const { email, password } = req.body;

    try {
        const userFound = await User.findOne({ email });

        if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });

        // Se compara la contraseña ingresada con la contraseña almacenada en la base de datos - .compare devuelve un booleano
        const matchPassword = await bcrypt.compare(password, userFound.password);

        if (!matchPassword) return res.status(400).json({ message: "Contraseña incorrecta" });

        // Se crea el token de autenticación con el id del usuario
        const token = await createAccessToken({ id: userFound._id });

        res.cookie("token", token);
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createAt: userFound.createdAt,
            updateAt: userFound.updatedAt,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    };

};

// Para cerrar sesion y cerrar el token
export const logout = async (req, res) => {
    // el valor del token lo dejamos vacío
    res.cookie("token", "", {
        expires: new Date(0),
    });
    return res.sendStatus(200);

}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id);
    if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });
    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createAt: userFound.createdAt,
        updateAt: userFound.updatedAt
    });
};