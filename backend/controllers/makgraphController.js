// const asyncHandler = require("express-async-handler");

// const Makgraph = require("../models/makgraphModel");
// const User = require("../models/userModel");

// // @desc Get makgraph
// // @route GET /api/makgraph
// // @access Private
// const getMakgraph = asyncHandler(async (req, res) => {
//   const makgraph = await Makgraph.find({ user: req.user.id });

//   res.status(200).json(makgraph);
// });

// // @desc Get makgraph
// // @route GET /api/makgraph
// // @access Private
// const setMakgraph = asyncHandler(async (req, res) => {
//   if (!req.body.text) {
//     res.status(400);
//     throw new Error("Ajouter un champ de texte");
//   }

//   const makgraph = await Makgraph.create({
//     text: req.body.text,
//     user: req.user.id,
//   });

//   res.status(200).json({ makgraph });
// });

// // @desc Get makgraph
// // @route GET /api/makgraph
// // @access Private
// const updateMakgraph = asyncHandler(async (req, res) => {
//   const makgraph = await Makgraph.findById(req.params.id);

//   if (!makgraph) {
//     res.status(400);
//     throw new Error("Makgraph non trouvé");
//   }

//   // Check for user
//   if (!req.user) {
//     res.status(401);
//     throw new Error("Utilisateur non trouvé");
//   }

//   // Make sure the logged in user matches the goal user
//   if (makgraph.user.toString() !== req.user.id) {
//     res.status(401);
//     throw new Error("Utilisateur non autorisé");
//   }

//   const updatedMakgraph = await Makgraph.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     {
//       new: true,
//     }
//   );
//   res.status(200).json(updatedMakgraph);
// });

// // @desc Get makgraph
// // @route GET /api/makgraph
// // @access Private
// const deleteMakgraph = asyncHandler(async (req, res) => {
//   const makgraph = await Makgraph.findById(req.params.id);

//   if (!makgraph) {
//     res.status(400);
//     throw new Error("Makgraph non trouvé");
//   }

//   if (!makgraph) {
//     res.status(400);
//     throw new Error("Makgraph non trouvé");
//   }

//   // Check for user
//   if (!req.user) {
//     res.status(401);
//     throw new Error("Utilisateur non trouvé");
//   }

//   // Make sure the logged in user matches the makgraph user
//   if (makgraph.user.toString() !== req.user.id) {
//     res.status(401);
//     throw new Error("Utilisateur non autorisé");
//   }

//   await makgraph.remove;

//   res.status(200).json({ id: req.params.id });
// });

// module.exports = {
//   getMakgraph,
//   setMakgraph,
//   updateMakgraph,
//   deleteMakgraph,
// };
