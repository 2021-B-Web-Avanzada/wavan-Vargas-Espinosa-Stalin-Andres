const mongoose = require("mongoose");

// Schema
const PlatoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  // Categoria y COmprobante
  cateogriaID: mongoose.Schema.Types.ObjectId,
  comprobanteID: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Plato', PlatoSchema)
