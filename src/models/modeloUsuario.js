import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
    nombres:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
    },
    apellido:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
    },
    role:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    contrasenia:{
        type: String,
        minLength: 4,
        maxLength: 70,
        required: true
    },
    arrayProductos: []
    
})
 const Usuario = model('usuario', usuarioSchema)
export default Usuario