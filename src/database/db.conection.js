/* import {connect} from "mongoose"
import { MONGODB_URI } from '../config';


 connect(MONGODB_URI).then(resp => console.log(`DB conectada en ${resp.connection.name}`)).catch(error => console.log(error))  */


 require('dotenv').config()
const mongoose = require ('mongoose')
const database = process.env.DB

const connectDB = async () =>{
  try {
    await mongoose.connect(database)
    console.log('DB conectada exitosamente')
  } catch (error) {
    console.log(error)
  }
}

connectDB()