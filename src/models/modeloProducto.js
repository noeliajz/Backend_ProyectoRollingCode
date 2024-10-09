import { Schema, model } from "mongoose";

const productoSchema = new Schema({
    nombre:{
        type: String,
        minlength: 3,
        maxlength: 35,
        required: true
    },
    precio:{
        type: Number,
        min: 1,
        max:1000000000,
        required: true
    },
    categoria: {
        type: String, 
        minlength: 3,
        maxlength: 30,
        required: true
    },
    descripcion: {
        type: String,
        minlength: 3,
        maxlength: 30,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    imagen:{
        type: String
    }

})

const Producto = model ('Producto', productoSchema)
export default Producto
