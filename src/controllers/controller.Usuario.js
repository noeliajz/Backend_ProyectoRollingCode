import Usuario from '../models/modeloUsuario'

export const crearUsuario = async(req, res) => {
    try {
        const nuevoUsuario = new Usuario(req.body);
        await nuevoUsuario.save();
        res.status(201).json({
            mensaje: 'Se creó el usuario con éxito'
        });
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(400).json({
            mensaje: 'Error al crear usuario',
            detalles: error.errors // Proporciona detalles sobre los errores de validación
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