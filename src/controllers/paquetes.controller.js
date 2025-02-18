import Paquete from '../models/paquete.model.js';

export const getPaquetes = async (req, res) => {
    const paquetes = await Paquete.find({
        user: req.user.id
    });
    res.json(paquetes);
}

export const createPaquete = async (req, res) => {

    const { name, description, price, img } = req.body;

    const newPaquete = new Paquete({
        name,
        description,
        price,
        img,
        user: req.user.id
    });

    const savedPaquete = await newPaquete.save();
    res.json(savedPaquete);
}

export const getPaquete = async (req, res) => {

    const paquete = await Paquete.findById(req.params.id);
    if (!paquete) return res.status(404).json({ message: "Paquete no encontrado" });
    res.json(paquete);
}

export const updatePaquete = async (req, res) => {

    const paquete = await Paquete.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!paquete) return res.status(404).json({ message: "Paquete no encontrado" });
    res.json(paquete);

}

export const deletePaquete = async (req, res) => {
    const paquete = await Paquete.findByIdAndDelete(req.params.id);
    if (!paquete) return res.status(404).json({ message: "Paquete no encontrado" });
    return res.sendStatus(204); // 204 -> Todo estuvo ok!
}
