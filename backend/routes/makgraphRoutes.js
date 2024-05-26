const express = require("express");
const router = express.Router();
const {
  getMakgraph,
  setMakgraph,
  updateMakgraph,
  deleteMakgraph,
} = require("../controllers/makgraphController");

router.route("/").get(getMakgraph).post(setMakgraph);
router.route("/:id").put(updateMakgraph).delete(deleteMakgraph);

module.exports = router;
