import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    rquired: true,
    trim: true
  },

  libretaMilitar: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  contraseña: {
    type: String,
    required: true,
    trim: true
  }


});

export default  model('User', userSchema);