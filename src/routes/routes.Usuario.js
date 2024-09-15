import {Router} from 'express'
import { crearUsuario, editarUsuario, eliminarUsuario, obtenerTodosLosUsuarios, obtenerUnUsuario } from '../controllers/controller.Usuario'

const router= Router()
router.route('/usuario').post(crearUsuario).get(obtenerTodosLosUsuarios)
router.route('/usuario/:id').get(obtenerUnUsuario).put(editarUsuario).delete(eliminarUsuario)
export default router