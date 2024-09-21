import { Schema, model, Types } from 'mongoose';

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
    pago: {
        type: Boolean,
        required: true
    },
    arrayProductos: [{
        type: Types.ObjectId, // Asegúrate de usar Types.ObjectId
        ref: 'Producto' // Referencia al modelo Producto
    }]
});

const Usuario = model('Usuario', usuarioSchema);
export default Usuario;
