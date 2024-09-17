import {Router} from 'express'
import { crearUsuario, editarUsuario, eliminarUsuario, iniciarSesion, obtenerTodosLosUsuarios, obtenerUnUsuario } from '../controllers/controller.Usuario'
import { check } from 'express-validator'

const router= Router()
 router.route('/usuario').post([
    check('email')
    .notEmpty()
    .withMessage('campo email vacio')
    .isEmail()
    .withMessage('debe ser del tipo email')
    .isLength({min: 5, max: 30})
    .withMessage('debe tener entre 5 y 30 caracteres máximo'),
    check('contrasenia')
    .notEmpty()
    .withMessage('campo contrasenia vacio')
    .isLength({min: 4, max: 20})
    .withMessage('debe tener entre 4 y 20 caracteres máximo')

], iniciarSesion) 
router.route('/usuario').post([
    check('nombres')
    .notEmpty()
    .withMessage('el campo nombres esta vacio')
    .isLength({min: 3, max:20})
    .withMessage('el campo nombres debe tener como minimo 3 y maximo 20 caracteres'),
    check('apellido')
    .notEmpty()
    .withMessage('el campo apellido esta vacio')
    .isLength({min: 3, max: 20 })
    .withMessage('el apellido debe tener como minimo 3 y maximo 20 caracteres'),
    check('rol')
    .notEmpty()
    .withMessage('el campo rol esta vacio')
    .isIn(['admin', 'user'])
    .withMessage('debe seleccionar una de las opciones'),
    check('email')
    .notEmpty()
    .withMessage('el campo email esta vacio')
    .isLength({min: 5, max: 30})
    .withMessage('el mail debe tener entre 5 y 30 caracteres')
    .isEmail()
    .withMessage('el campo debe ser del tipo email, por ejemplo ejemplo2@ejemplo.com'),
    check('contrasenia')
    .notEmpty()
    .withMessage('el campo contraseña esta vacio')
    .isLength({min: 4, max: 70})
],
    crearUsuario)
    .get(obtenerTodosLosUsuarios)
router.route('/usuario/:id').get(obtenerUnUsuario).put([
    check('nombres')
    .notEmpty()
    .withMessage('el campo nombres esta vacio')
    .isLength({min: 3, max:20})
    .withMessage('el campo nombres debe tener como minimo 3 y maximo 20 caracteres'),
    check('apellido')
    .notEmpty()
    .withMessage('el campo apellido esta vacio')
    .isLength({min: 3, max: 20 })
    .withMessage('el apellido debe tener como minimo 3 y maximo 20 caracteres'),
    check('rol')
    .notEmpty()
    .withMessage('el campo rol esta vacio')
    .isIn(['admin', 'user'])
    .withMessage('debe seleccionar una de las opciones'),
    check('email')
    .notEmpty()
    .withMessage('el campo email esta vacio')
    .isLength({min: 5, max: 30})
    .withMessage('el mail debe tener entre 5 y 30 caracteres')
    .isEmail()
    .withMessage('el campo debe ser del tipo email, por ejemplo ejemplo2@ejemplo.com'),
    check('contrasenia')
    .notEmpty()
    .withMessage('el campo contraseña esta vacio')
    .isLength({min: 4, max: 70})
],
    editarUsuario).delete(eliminarUsuario)
export default router