import {Router} from 'express'
import { crearProducto, editarProducto, eliminarProducto, obtenerTodosProductos, obtenerUnProducto } from '../controllers/controller.Producto'

const router= Router()
router.route('/producto').post(crearProducto).get(obtenerTodosProductos)
router.route('/producto/:id').put(editarProducto).get(obtenerUnProducto).delete(eliminarProducto)

export default router