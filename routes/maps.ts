import express from "express";
import Map from "../models/Map";

const router = express.Router();

// @desc    Get all maps
// @route   GET /api/v1/maps/getAll/
// @access  Public
router.get("/getAll", async (req, res, next) => {
  try {
    const maps = await Map.find();
    res.status(200).json(maps);
  } catch (error) {
    next(error);
  }
});

// @desc    Get maps by whaleId
// @route   GET /api/v1/maps/:whaleId/
// @access  Public
router.get("/whale/:whaleId", async (req, res, next) => {
  const { whaleId } = req.params;
  try {
    const maps = await Map.find({ whaleId : whaleId });
    res.status(200).json(maps);
  } catch (error) {
    next(error);
  }
});

export default router;
