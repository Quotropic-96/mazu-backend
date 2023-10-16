import express from "express";
import Map from "../models/Map";
import isMonth from "../utils/isMonth";

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

// @desc    Get maps by whaleId and optionally filter by selected month
// @route   GET /api/v1/maps/whale/:whaleId?month?startMonth?endMonth
// @access  Public
router.get("/whale/:whaleId", async (req, res, next) => {
  const monthQuery = req.query.month;
  const startMonthQuery = req.query.startMonth;
  const endMonthQuery = req.query.endMonth;
  const { whaleId } = req.params;

  try {
    const maps = await Map.find({ whaleId }).populate("whaleId");

    // Check if a month query parameter exists
    if (monthQuery) {
      const month = Number(monthQuery);
      if (!isMonth(month)) {
        return res.status(400).json({ error: "Invalid month parameter" });
      }
      const filteredMaps = maps.filter(
        (map) => map.startMonth <= month && map.endMonth >= month
      );
      return res.status(200).json(filteredMaps);
    } else if (startMonthQuery && endMonthQuery) {
      const startMonth = Number(startMonthQuery);
      const endMonth = Number(endMonthQuery);
      if (!isMonth(startMonth)) {
        return res.status(400).json({ error: "Invalid start month parameter" });
      }
      if (!isMonth(endMonth)) {
        return res.status(400).json({ error: "Invalid end month parameter" });
      }
      const filteredMaps = maps.filter(
        (map) =>
          map.startMonth < endMonth &&
          (startMonth <= map.startMonth || startMonth < map.endMonth)
      );
      return res.status(200).json(filteredMaps);
    }

    // No month query parameter, return all maps for the whaleId
    return res.status(200).json(maps);
  } catch (error) {
    next(error);
  }
});

// @desc    Get single map
// @route   GET /api/v1/maps/:mapId/
// @access  Public
router.get("/:mapId", async (req, res, next) => {
  const { mapId } = req.params;
  try {
    const maps = await Map.findById(mapId);
    res.status(200).json(maps);
  } catch (error) {
    next(error);
  }
});

export default router;
