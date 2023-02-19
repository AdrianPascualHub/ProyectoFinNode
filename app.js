const express = require('express')
const bodyParser  = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
require ('dotenv').config()
const port = process.env.PORT||3005
//Conexión a base de datosnpm
const mongoose = require('mongoose');
//Variables que tendremos siempre:
//Lo correcto será declararlas EN VARIABLES DE ENTORNO
/*
PORT=4000
DB_USER=cursonode
DB_PASSWORD=8fNCez6Emijrr3tk
DB_NAME=dbformula1
*/
//para que nadie vea directamente nuestras credenciales
const uri= `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ccdnevu.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(uri,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e))
//motor de plantilla
app.set('views',__dirname + '/views');
app.set('view engine' ,'ejs')

//middleware
app.use(express.static(__dirname + '/public'));

//Llamadas a las rutas:

app.use('/', require('./router/rutas'));
app.use('/circuito', require('./router/circuito'));
app.use('/ferrari', require('./router/ferrari'));
app.use('/mercedes', require('./router/mercedes'));
app.use('/alpha', require('./router/alpha'));
app.use('/alpine', require('./router/alpine'));
app.use('/aston', require('./router/aston'));
app.use('/williams', require('./router/williams'));
app.use('/redbull', require('./router/redbull'));
app.use('/haas', require('./router/haas'));
app.use('/alfaromeo', require('./router/alfaromeo'));
app.use('/mclaren', require('./router/mclaren'));
app.use('/campeonato', require('./router/campeonato'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
