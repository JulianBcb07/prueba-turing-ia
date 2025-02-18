import mongoose from "mongoose";

const paqueteSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
        trim: true,
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    price: {
        type: Number,
        require: true,
        trim: true,
    },
    img: {
        type: String,
        data: Buffer,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    }
}, {
    timestamps: true
});

export default mongoose.model("Paquete", paqueteSchema);