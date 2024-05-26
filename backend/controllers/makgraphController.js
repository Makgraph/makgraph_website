const asyncHandler = require("express-async-handler");

// @desc Get makgraph
// @route GET /api/makgraph
// @access Private
const getMakgraph = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Makgraph" });
});

// @desc Get makgraph
// @route GET /api/makgraph
// @access Private
const setMakgraph = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Ajouter un champ de texte");
  }

  rex.status(200).json({ message: "Set Makgraph" });
});

// @desc Get makgraph
// @route GET /api/makgraph
// @access Private
const updateMakgraph = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Makgraph ${req.params.id}` });
});

// @desc Get makgraph
// @route GET /api/makgraph
// @access Private
const deleteMakgraph = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Makgraph ${req.params.id}` });
});

module.exports = {
  getMakgraph,
  setMakgraph,
  updateMakgraph,
  deleteMakgraph,
};
