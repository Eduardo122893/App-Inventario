const express = require('express')
const cors = require('cors');

const { connectDB } = require('../db/conection');



class Server {

    constructor(){

       this.app = express();          // Esto es una instacia de mi app
       this.port = process.env.PORT;  // esto es el puerto
       this.producto = '/Rproducto' 
       this.croducto = '/Cproducto'
       this.Droducto = '/Dproducto'
       this.conection();              // esta es la conexion a la base de datos
        /* Middleware*/
        this.middleware();            // estos son mis middleware 
        this.routes();                // estas son mis rutas

    }

    middleware() {
        
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
        
    }

    async conection() {
        try {
          await connectDB();
          console.log('Conexión exitosa a la base de datos');
        } catch (error) {
          console.error('Error al conectar a la base de datos:', error.message);
        }
      }

    routes() {

        this.app.use( this.producto, require('../routes/Rproducto' ) )
        this.app.use( this.croducto, require('../routes/Cproducto' ) )
        this.app.use( this.Droducto, require('../routes/Dproducto' ) )


    }
    
    listen() {

         this.app.listen( this.port, ()=>{
            console.log('Servidor corriendo en el puerto:', this.port )
        })
    }

}


module.exports = Server;