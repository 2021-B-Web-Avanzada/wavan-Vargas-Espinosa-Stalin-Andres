const express = require('express');
const router = express.Router();
const Categoria = require("../models/categoria.js");

// Create document categoria
router.post("/", async (req, res) => {
  const categoria = new Categoria({
    nombre: req.body.nombre,

  });

  // Save to DB
  try {
    const promise = await categoria.save();
    res.json(promise);
  } catch (e) {
    res.json({message: e});
  }
});

// Read all documents
router.get("/", async (req, res) => {
  try {
    const categorias = await categoria.find();
    res.json(categorias);
  } catch (e) {
    res.json({message: e});
  }
});

// Read document by ID
router.get("/:categoriaID", async (req, res) => {
  try {
    const categoria = await categoria.findById(req.params.categoriaID);
    res.json(categoria);
  } catch (e) {
    res.json({message: e});
  }
});

// Update document by ID
router.patch("/:categoriaID", async (req, res) => {
  try {
    const categoria = await categoria.updateOne(
      { _id: req.params.categoriaID },
      { $set: {
          nombre: req.body.nombre,

        }}
    );
    res.json(categoria);
  } catch (e) {
    res.json({message: e});
  }
});

// Delete document by ID
router.delete("/:categoriaID", async (req, res) => {
  try {
    const categoria = await categoria.remove(
      { _id: req.params.categoriaID }
    );
    res.json(categoria);
  } catch (e) {
    res.json({message: e});
  }
});

module.exports = router;
