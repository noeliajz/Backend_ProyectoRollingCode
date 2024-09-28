const verificarRol = (roles) => {
    return (req, res, next) => {
        const usuario = req.user; // Asegúrate de tener el usuario en req.user
        if (!usuario || !roles.includes(usuario.rol)) {
            return res.status(403).json({ mensaje: 'Acceso denegado.' });
        }
        next();
    };
};
