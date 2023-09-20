import express from "express";
import Whale from "../models/Whale";

const router = express.Router();

// @desc    Get all whales
// @route   GET /api/v1/whales/getAll/
// @access  Public
router.get("/getAll", async (req, res, next) => {
  try {
    const whales = await Whale.find();
    res.status(200).json(whales);
  } catch (error) {
    next(error);
  }
});

// @desc    Get single whale
// @route   GET /api/v1/whales/:whaleId
// @access  Public
router.get("/:whaleId", async (req, res, next) => {
  const { whaleId } = req.params;
  try {
    const whale = await Whale.findById(whaleId);
    res.status(200).json(whale);
  } catch (error) {
    next(error);
  }
})

export default router;
