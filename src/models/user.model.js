import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    // trim: true => remueve los especios en blanco al inicio y al final

    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model("User", userSchema);