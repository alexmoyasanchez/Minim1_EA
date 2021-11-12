import { Router } from "express"; 
import eventoController from "../controllers/evento.controller";

const router = Router();

router.get('/', eventoController.getAll);
router.get('/:id', eventoController.getEvento);
router.post('/new', eventoController.newEvento);
router.put('/update/:id', eventoController.updateEvento);
//Exportem router x utilitzar rutes a app.ts
exports.default = router;