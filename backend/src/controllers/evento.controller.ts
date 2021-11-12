import { Request, Response} from "express";
import { getAllJSDocTags } from "typescript";
//import evento from "../models/evento";
import Evento from "../models/evento"
/*
○ Formulario para añadir un grupo de investigación que ha desarrollado una
vacuna: nombre del grupo, descripción. Url, responsable del grupo

○ Listado de grupos de investigación

○ Edición de un grupo de investigación. (Esta funcionalidad es accesible desde el
listado)
*/
//obtenir tots els equips d'investigació
function getAll(req:Request, res:Response) {
    Evento.find({}).then((data) => {
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
function getEvento(req:Request, res:Response) {
    Evento.findOne({ "nombreEvento": req.params.nombreEvento }).then((data) => {
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
function newEvento(req:Request, res:Response) {
    const evento = new Evento({
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
function updateEvento(req:Request, res:Response) {
    const nombreEvento = req.body.nombreEvento;
    const fecha = req.params.fecha;
    const descripcion = req.body.descripcion;
    const persona = req.body.persona;
    Evento.update({ "nombreEvento": nombreEvento }, { $set: { "nombreEvento": nombreEvento, "fecha": fecha, "descripcion": descripcion, "persona": persona } }).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

export default { getAll, getEvento, newEvento, updateEvento };
