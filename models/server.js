const express = require('express');
const cors = require('cors');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        //Middlewares
        this.middlewares();
        //Rutas
        this.routes();
    }



    routes() {
      this.app.use('/api/usuarios', require('../routes/user'))
    }
    
    middlewares() {
        this.app.use(express.static('public'))

        this.app.use(express.json());

        this.app.use(cors())
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('El servidor está escuchando en el puerto ', this.port)
        })
    }

}

module.exports = Server;