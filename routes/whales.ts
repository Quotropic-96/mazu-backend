const express = require("express");
const router = express.Router();
const Whale = require("../models/Whale.ts");

// @desc    Get all whales
// @route   GET /api/v1/whales/getAll/
// @access  Public
router.get("/getAll", async (req, res, next) => {
  const whales = await Whale.find();
  res.status(200).json( whales );
});

module.exports = router;
