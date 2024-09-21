import Usuario from '../models/modeloUsuario'
import bcrypt from 'bcryptjs'
import { validationResult } from "express-validator";
import Producto from '../models/modeloProducto'

export const crearUsuario = async(req, res) => {
    try {
        const email = await Usuario.findOne({ email: req.body.email });
        if (email) {
          return res.status(400).json({ mensaje: "ya existe el email enviado" });
        }
        const errors = validationResult(req);
    
        if (!errors.isEmpty()) {
          return res.status(400).json({
            errores: errors.array(),
          });
        }
    
        const nuevoEmail = new Usuario(req.body);
        const salt = bcrypt.genSaltSync(10);
        nuevoEmail.contrasenia = bcrypt.hashSync(req.body.contrasenia, salt);
        await nuevoEmail.save();
    
        res.status(201).json({
          mensaje: "Se creó un nuevo usuario",
        });
      } catch (error) {
        console.log(error);
        res.status(400).json({
          mensaje: "Error al crear usuario",
        });
      }
};


export const obtenerTodosLosUsuarios = async(req, res) => {
    try {
        const usuarios = await Usuario.find()  
        res.status(200).json(usuarios)

    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: 'error al buscar usuario'
        })
    }
}

export const obtenerUnUsuario = async (req, res) => {
    try {
        const id = req.params.id
        const usuario= await Usuario.findOne({_id: req.params.id})          
        res.status(200).json({
            mensaje: 'se encontró al usuario',
            usuario
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: 'error al encontrar el usuario',
            detalle: error.errors
        })
    }
}

export const editarUsuario = async (req,res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate({_id: req.params.id},req.body, {new: true})
        res.status(200).json({
            mensaje: 'se actualizó el usuario',
            usuario
        })
                    
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: 'error al editar el usuario',
            detalle: error.errors
        })
    }
}

export const eliminarUsuario = async (req, res) => {
    try {
        await Usuario.findOneAndDelete({_id: req.params.id})
        res.status(200).json({
            mensaje: 'se eliminó el usuario'
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: 'error al eliminar usuario'
        })
    }
}

 export const iniciarSesion = async ( req, res) => {
    try {
        let usuario = await Usuario.findOne({email: req.body.email})
        if(!usuario){
            return  res.status(404).json({
                mensaje: 'correo o contraseña invalido'
            })
        }
        const contraseniaValida = bcrypt.compareSync(req.body.contrasenia, usuario.contrasenia)
        if(!contraseniaValida){
            return  res.status(400).json({
                mensaje: 'correo o contraseña invalido'
            })
        }
        res.status(200).json({
            mensaje: 'usuario logueado'
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: 'no se pudo iniciar sesión'
        })
    }
} 


/* export const agregarProductosAusuarios = async (req, res) => {
    
        try {
            const { id } = req.params;
    
            // Buscar el usuario por ID
            const getUsuario = await Usuario.findById(id);
            if (!getUsuario) {
                return res.status(404).json({ mensaje: 'Usuario no encontrado' });
            }
    
            // Crear y guardar el nuevo producto
            const nuevoarticulo = new Producto(req.body);
            await nuevoarticulo.save();
    
            // Agregar el ID del nuevo producto al array de artículos del usuario
            getUsuario.arrayProductos.push(nuevoarticulo._id);
    
            // Guardar los cambios en la Base de Datos
            await getUsuario.save();
    
            // Responder con éxito
            res.status(200).json({ mensaje: 'Producto agregado al usuario con éxito' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensaje: 'Error al agregar el producto al usuario' });
        }
    }; */
    export const agregarProductosAusuarios = async (req, res) => {
        try {
            const { id } = req.params;
    
            // Buscar el usuario por ID
            const getUsuario = await Usuario.findById(id);
            if (!getUsuario) {
                return res.status(404).json({ mensaje: 'Usuario no encontrado' });
            }
    
            // Validar que req.body contenga los campos necesarios para Producto
            if (!req.body || !req.body.nombre || !req.body.precio) {
                return res.status(400).json({ mensaje: 'Datos del producto incompletos' });
            }
    
            // Crear y guardar el nuevo producto
            const nuevoarticulo = new Producto(req.body);
            await nuevoarticulo.save();
    
            // Agregar el ID del nuevo producto al array de artículos del usuario
            getUsuario.arrayProductos.push(nuevoarticulo._id);
    
            // Guardar los cambios en la Base de Datos
            await getUsuario.save();
    
            // Responder con éxito, incluyendo el producto agregado
            res.status(200).json({ 
                mensaje: 'Producto agregado al usuario con éxito',
                producto: nuevoarticulo // Devuelve el producto creado
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensaje: 'Error al agregar el producto al usuario' });
        }
    };
    