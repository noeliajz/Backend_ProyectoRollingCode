import Producto from "../models/modeloProducto";

export const crearProducto = async (req, res) => {
    try {

        const producto = new Producto(req.body)
        await producto.save()
        res.status(201).json({
            mensaje: 'se creó el usuario',
            producto
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje:' error al crear producto',
            detalle: error.errors
        })
    }
}