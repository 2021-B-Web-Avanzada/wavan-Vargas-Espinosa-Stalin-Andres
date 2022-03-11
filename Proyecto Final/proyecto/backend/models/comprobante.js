const mongoose = require("mongoose");

// Schema
const ComprobanteSchema = mongoose.Schema({
  fecha: {
    type: Date,
    default: Date.now,
  },
  subtotal: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  estadoComprobante: {
    type: String,
    required: true,
  },
  tipoComprobante: {
    type: String,
    required: true,
  },
  detalle: {
    type: String,
    required: true,
  },
  descuentoCumpleanos: {
    type: Number,
    required: true,
  },
  clienteID: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Comprobante', ComprobanteSchema);
