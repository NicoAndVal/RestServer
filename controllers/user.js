
const usuariosGet = (req, res) => {
    res.json({
        ok: true,
        msg:'Api get'
    })
}
const usuariosPost = (req, res) => {

    const body = req.body;

    console.log(body);

    res.json({
        ok: true,
        msg: 'Api post',
        body
    })
}
const usuariosDelete = (req, res) => {
    res.json({
        ok: true,
        msg:'Api delete'
    })
}
const usuariosPut = (req, res) => {

    const id = req.params.id;

    const {q, api_key} = req.query

    res.json({
        ok: true,
        msg: 'Api PUT',
        id,
        q,
        api_key
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPut
}