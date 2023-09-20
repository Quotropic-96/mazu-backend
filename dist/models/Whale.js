"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const WhaleSizeSchema = new mongoose_1.Schema({
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true,
    },
    length: {
        type: Number,
        required: true,
    },
});
const WhaleSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Whale's name is required"],
    },
    otherNames: {
        type: [String],
        default: null,
    },
    scientificName: {
        type: String,
        required: [true, "Whale's scientific name is required"],
    },
    sizes: {
        type: [WhaleSizeSchema],
        required: [true, "Whale's size is required"],
        validate: [arrayLimit, 'Exceeds the limit of size records'],
    },
    curiosities: {
        type: [String],
        default: ['No information to display'],
    },
});
function arrayLimit(val) {
    return val.length <= 2;
}
const WhaleModel = mongoose_1.default.model('Whale', WhaleSchema);
exports.default = WhaleModel;
//# sourceMappingURL=Whale.js.map