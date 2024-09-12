import { Schema, model } from "mongoose";

const productoSchema = new Schema({
    nombre:{
        type: String,
        minLength: 3,
        maxLength: 20,
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
        minLength: 3,
        maxLength: 20,
        required: true
    }

})

const Producto = model ('producto', productoSchema)
export default Producto
