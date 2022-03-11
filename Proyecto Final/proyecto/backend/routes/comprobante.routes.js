const express = require('express');
const router = express.Router();
const comprobante = require("../models/comprobante.js");
const path = "/:clienteID/comprobante";

// Create document comprobante
router.post(path, async (req, res) => {
  const comprobante = new comprobante({
    fecha: req.body.fecha,
    subtotal: req.body.subtotal,
    total: req.body.total,
    estadoComprobante: req.body.estadoComprobante,
    tipoComprobante: req.body.tipoComprobante,
    detalle: req.body.detalle,
    descuentoCumpleanos: req.body.descuentoCumpleanos,
    // Store
    clienteID: req.params.clienteID,

  });

  try {
    const promise = await comprobante.save();
    res.json(promise);
  } catch (e) {
    res.json({message: e});
  }
});

// Read all documents
router.get(path, async (req, res) => {
  try {
    const comprobantes = await comprobante.find({storeID: req.params.storeID});
    res.json(comprobantes);
  } catch (e) {
    res.json({message: e});
  }
});

// Read document by ID
router.get(`${path}/:comprobanteID`, async (req, res) => {
  try {
    const comprobante = await comprobante.findById(req.params.comprobanteID);
    res.json(comprobante);
  } catch (e) {
    res.json({message: e});
  }
});

// Update document by ID
router.patch(`${path}/:comprobanteID`, async (req, res) => {
  try {
    const comprobante = await comprobante.updateOne(
      { _id: req.params.comprobanteID },
      { $set: {
          fecha: req.body.fecha,
          subtotal: req.body.subtotal,
          total: req.body.total,
          estadoComprobante: req.body.estadoComprobante,
          tipoComprobante: req.body.tipoComprobante,
          detalle: req.body.detalle,
          descuentoCumpleanos: req.body.descuentoCumpleanos,
          // Store
          clienteID: req.params.clienteID,
        } }
    );
    res.json(comprobante);
  } catch (e) {
    res.json({message: e});
  }
});

// Delete document by ID
router.delete(`${path}/:comprobanteID`, async (req, res) => {
  try {
    const comprobante = await comprobante.remove(
      { _id: req.params.comprobanteID }
    );
    res.json(comprobante);
  } catch (e) {
    res.json({message: e});
  }
});

module.exports = router;
