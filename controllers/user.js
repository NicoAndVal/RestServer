const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

const usuariosGet = async(req, res) => {

    const { limit = 5, desde = 0 } = req.query;

    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments({ estado: true }),
        Usuario.find({estado: true})
        .skip(Number(desde))
        .limit(Number(limit))
    ])

    res.json({
        total,
        usuarios
    })
}
const usuariosPost =async(req, res) => {

    const {nombre, correo, password, rol} = req.body;

    try {
        const usuario = new Usuario({nombre, correo, password, rol});
    
        const salt = bcrypt.genSaltSync();
        
        usuario.password = bcrypt.hashSync(password, salt);
        
        await usuario.save();

    
        res.json({
            usuario
        })
        
    } catch (error) {
        console.log(error);
        throw new Error('Error en el servidor')
    }

}
const usuariosDelete =async(req, res) => {

    const { id } = req.params;

    const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });

    res.json({
        usuario
    })
}
const usuariosPut = async(req, res) => {

    const id = req.params.id;

    const { _id,  google, correo, password, ...resto } = req.body;

    if (password) {
        const salt = bcrypt.genSaltSync();
        
        resto.password = bcrypt.hashSync(password, salt);
    }

    const usuarioActualizado = await Usuario.findByIdAndUpdate({ _id: id }, resto);

    res.json({
        usuarioActualizado
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPut
}