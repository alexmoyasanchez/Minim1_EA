import {Usuario} from "./usuario";

export interface GrupoInvestigacion {
    nombregrupo: String;
    id: String;
    descripcion: String;
    responsable: String;
    url: String;
    usuarios: Usuario;
}
