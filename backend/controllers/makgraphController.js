const asyncHandler = require("express-async-handler");

const Makgraph = require("../models/makgraphModel");

// @desc Get makgraph
// @route GET /api/makgraph
// @access Private
const getMakgraph = asyncHandler(async (req, res) => {
  const makgraph = await Makgraph.find();

  res.status(200).json(makgraph);
});

// @desc Get makgraph
// @route GET /api/makgraph
// @access Private
const setMakgraph = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Ajouter un champ de texte");
  }

  const makgraph = await Makgraph.create({
    text: req.body.text,
  });

  res.status(200).json({ makgraph });
});

// @desc Get makgraph
// @route GET /api/makgraph
// @access Private
const updateMakgraph = asyncHandler(async (req, res) => {
  const makgraph = await Makgraph.findById(req.params.id);

  if (!makgraph) {
    res.status(400);
    throw new Error("Makgraph non trouvé");
  }

  const updatedMakgraph = await Makgraph.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedMakgraph);
});

// @desc Get makgraph
// @route GET /api/makgraph
// @access Private
const deleteMakgraph = asyncHandler(async (req, res) => {
  const makgraph = await Makgraph.findById(req.params.id);

  if (!makgraph) {
    res.status(400);
    throw new Error("Makgraph non trouvé");
  }

  await makgraph.remove;

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getMakgraph,
  setMakgraph,
  updateMakgraph,
  deleteMakgraph,
};
