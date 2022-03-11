const mongoose = require("mongoose");

// Schema
const CategoriaSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model('Categoria', CategoriaSchema)
