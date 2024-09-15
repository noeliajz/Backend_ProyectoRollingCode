import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import routesUsuario from './src/routes/routes.Usuario'

const mongoose = require('mongoose');
require('dotenv').config();
/* require('./database/db');
 */
/* const app = express() */
/* app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), () => {
    console.log('estoy en el puerto'+ app.get('port'))



}) */


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

const app = express();



app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '/public')))
app.use('/apiStock', routesUsuario)

const PORT = process.env.PORT || 4000;
app.listen(PORT, function() {
    console.log(`App listening on ${PORT}`);
});