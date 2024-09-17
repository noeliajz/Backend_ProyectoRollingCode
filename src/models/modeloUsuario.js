import { Schema, model } from 'mongoose';

const usuarioSchema = new Schema({
    nombres: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
    },
    apellido: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
    },
    rol: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        maxLength: 30,
    },
    contrasenia: {
        type: String,
        minLength: 4,
        maxLength: 70,
        required: true
    },
    arrayProductos: []
});

const Usuario = model('Usuario', usuarioSchema);
export default Usuario;
