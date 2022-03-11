const express = require('express');
const router = express.Router();
const Cliente = require("../models/cliente.js");

// Create document cliente
router.post("/", async (req, res) => {
  const cliente = new Cliente({
    cedula: req.body.cedula,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    direccion: req.body.direccion,
    ciudad: req.body.ciudad,
    telefono: req.body.telefono,
    email: req.body.email,
    fechaNacimiento: req.body.fechaNacimiento
  });

  // Save to DB
  try {
    const promise = await cliente.save();
    res.json(promise);
  } catch (e) {
    res.json({message: e});
  }
});

// Read all documents
router.get("/", async (req, res) => {
  try {
    const clientes = await cliente.find();
    res.json(clientes);
  } catch (e) {
    res.json({message: e});
  }
});

// Read document by ID
router.get("/:clienteID", async (req, res) => {
  try {
    const cliente = await cliente.findById(req.params.clienteID);
    res.json(cliente);
  } catch (e) {
    res.json({message: e});
  }
});

// Update document by ID
router.patch("/:clienteID", async (req, res) => {
  try {
    const cliente = await cliente.updateOne(
      { _id: req.params.clienteID },
      { $set: {
          nombre: req.body.nombre,

        }}
    );
    res.json(cliente);
  } catch (e) {
    res.json({message: e});
  }
});

// Delete document by ID
router.delete("/:clienteID", async (req, res) => {
  try {
    const cliente = await cliente.remove(
      { _id: req.params.clienteID }
    );
    res.json(cliente);
  } catch (e) {
    res.json({message: e});
  }
});

module.exports = router;
