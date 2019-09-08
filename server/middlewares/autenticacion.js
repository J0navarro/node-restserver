const jwt = require('jsonwebtoken');

//========================
// Verificar Token
//=========================

let verificaToken = (req, res, next) => {
    let token = req.get('Autorization');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                message: err
            });
        }
        req.usuario = decoded.usuario;

        next();
    });
};


// //========================
// // Verificar ADMIN_ROLE
// //=========================

let verificaRol_Admin = (req, res, next) => {
    let usuario = req.usuario;

    if (usuario.role !== 'ADMIN_ROLE') {
        return res.status(401).json({
            ok: false,
            message: 'EL USUARIO NO ES ADMINISTRADOR'
        });
    } else {
        next();
    }
};

module.exports = {
    verificaToken,
    verificaRol_Admin
};