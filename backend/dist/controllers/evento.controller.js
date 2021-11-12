"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import evento from "../models/evento";
const evento_1 = __importDefault(require("../models/evento"));
/*
○ Formulario para añadir un grupo de investigación que ha desarrollado una
vacuna: nombre del grupo, descripción. Url, responsable del grupo

○ Listado de grupos de investigación

○ Edición de un grupo de investigación. (Esta funcionalidad es accesible desde el
listado)
*/
//obtenir tots els equips d'investigació
function getAll(req, res) {
    evento_1.default.find({}).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
}
//obtenir grup d'investigació
function getEvento(req, res) {
    evento_1.default.findOne({ "nombreEvento": req.params.nombreEvento }).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
//afegir grup d'investigació
function newEvento(req, res) {
    const evento = new evento_1.default({
        "nombreEvento": req.body.nombreEvento,
        "fecha": req.body.fecha,
        "descripcion": req.body.descripcion
    });
    console.log(req.body);
    evento.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
//modificar grup d'investigació
function updateEvento(req, res) {
    const nombreEvento = req.body.nombreEvento;
    const fecha = req.params.fecha;
    const descripcion = req.body.descripcion;
    const persona = req.body.persona;
    evento_1.default.update({ "nombreEvento": nombreEvento }, { $set: { "nombreEvento": nombreEvento, "fecha": fecha, "descripcion": descripcion, "persona": persona } }).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}
exports.default = { getAll, getEvento, newEvento, updateEvento };
