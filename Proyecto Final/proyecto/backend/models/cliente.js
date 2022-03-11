const mongoose = require("mongoose");

// Schema
const ClienteSchema = mongoose.Schema({
  cedula: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  ciudad: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  fechaNacimiento: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model('Cliente', ClienteSchema);
