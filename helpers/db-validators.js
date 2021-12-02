const Role = require('../models/role');
const Usuario = require('../models/usuario');


const esRoleValido = async (rol = '') => {
        const existRol = await Role.findOne({ rol });
        
        if (!existRol) {
            throw new Error(`El rol ${rol} no está registrado en la BD`)
        }
}

const emailExiste = async(correo = '') => {
    const existeEmail = await Usuario.findOne({ correo });

        if (existeEmail) {
            throw new Error(`El email ${correo} ya está registrado en la BD`)
        }
}

const existeUsuarioPorId = async (id) => {
    const existeUsuario = await Usuario.findById(id);

    if (!existeUsuario) {
        throw new Error(`El id: ${id} no existe en la BD`)
    }

 }


module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}