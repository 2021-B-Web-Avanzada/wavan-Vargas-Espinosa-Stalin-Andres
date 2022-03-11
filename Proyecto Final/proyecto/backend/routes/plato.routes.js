const express = require('express');
const router = express.Router();
const Plato = require("../models/plato.js");
const path = "/:categoriaID/plato";

// Create document plato
router.post(path, async (req, res) => {
  const plato = new Plato({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    // Store
    categoriaID: req.params.categoriaID,
    comprobanteID: req.params.comprobanteID
  });

  try {
    const promise = await plato.save();
    res.json(promise);
  } catch (e) {
    res.json({message: e});
  }
});

// Read all documents
router.get(path, async (req, res) => {
  try {
    const platos = await Plato.find({storeID: req.params.storeID});
    res.json(platos);
  } catch (e) {
    res.json({message: e});
  }
});

// Read document by ID
router.get(`${path}/:platoID`, async (req, res) => {
  try {
    const plato = await plato.findById(req.params.platoID);
    res.json(plato);
  } catch (e) {
    res.json({message: e});
  }
});

// Update document by ID
router.patch(`${path}/:platoID`, async (req, res) => {
  try {
    const plato = await plato.updateOne(
      { _id: req.params.platoID },
      { $set: {
          nombre: req.body.nombre,
          descripcion: req.body.descripcion,
          precio: req.body.precio,
          // Store
          categoriaID: req.params.categoriaID,
          comprobanteID: req.params.comprobanteID
        } }
    );
    res.json(plato);
  } catch (e) {
    res.json({message: e});
  }
});

// Delete document by ID
router.delete(`${path}/:platoID`, async (req, res) => {
  try {
    const plato = await plato.remove(
      { _id: req.params.platoID }
    );
    res.json(plato);
  } catch (e) {
    res.json({message: e});
  }
});

module.exports = router;
