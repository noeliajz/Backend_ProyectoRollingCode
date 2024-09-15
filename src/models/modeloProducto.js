import { Schema, model } from "mongoose";

const productoSchema = new Schema({
    nombre:{
        type: String,
        minlength: 3,
        maxlength: 20,
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
    }

})

const Producto = model ('Producto', productoSchema)
export default Producto
