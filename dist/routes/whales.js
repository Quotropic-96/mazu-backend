"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Whale_1 = __importDefault(require("../models/Whale"));
const router = express_1.default.Router();
// @desc    Get all whales
// @route   GET /api/v1/whales/getAll/
// @access  Public
router.get("/getAll", async (req, res, next) => {
    const whales = await Whale_1.default.find();
    res.status(200).json(whales);
});
exports.default = router;
//# sourceMappingURL=whales.js.map