const express = require("express");
const router = express.Router();
const {
  orders,
  getOrder,
  updateOrder,
  userOrders,
  getAllOrders,
  orderDelivered,
} = require("../controllers/orderController");
const protect = require("../middleware/authMiddleware");

router.get("/", protect, getAllOrders);
router.post("/", protect, orders);
router.get("/", protect, userOrders);
router.route("/:id").get(protect, getOrder);
router.route("/:id/pay").put(protect, updateOrder);
router.route("/:id/delivered").put(protect, orderDelivered);

module.exports = router;
