import express from "express";
import Whale from "../models/Whale";

const router = express.Router();

// @desc    Get all whales
// @route   GET /api/v1/whales/getAll/
// @access  Public
router.get("/getAll", async (req, res, next) => {
  const whales = await Whale.find();
  res.status(200).json(whales);
});

export default router;
