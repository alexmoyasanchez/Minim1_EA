"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const evento_controller_1 = __importDefault(require("../controllers/evento.controller"));
const router = express_1.Router();
router.get('/', evento_controller_1.default.getAll);
router.get('/:id', evento_controller_1.default.getEvento);
router.post('/new', evento_controller_1.default.newEvento);
router.put('/update/:id', evento_controller_1.default.updateEvento);
//Exportem router x utilitzar rutes a app.ts
exports.default = router;
