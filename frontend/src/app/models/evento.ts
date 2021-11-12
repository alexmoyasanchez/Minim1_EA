import {Usuario} from "./usuario";

export interface Evento {
    nombreEvento: String;
    fecha: String;
    descripcion: String;
    usuario: Usuario;
}
