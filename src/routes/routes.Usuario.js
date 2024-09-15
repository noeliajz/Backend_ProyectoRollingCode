import {Router} from 'express'
import { crearUsuario, editarUsuario, obtenerTodosLosUsuarios, obtenerUnUsuario } from '../controllers/controller.Usuario'

const router= Router()
router.route('/usuario').post(crearUsuario).get(obtenerTodosLosUsuarios)
router.route('/usuario/:id').get(obtenerUnUsuario).put(editarUsuario)
export default router