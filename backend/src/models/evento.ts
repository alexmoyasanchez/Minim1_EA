import mongoose, { Schema, Document} from 'mongoose';

const eventoSchema = new Schema({
    nombreEvento: {
        type: String
    },
    fecha: {
        type: String
    },
    descripcion: {
        type: String
    }
});

export interface IEstado extends Document{
    nombreEvento: String;
    fecha: String;
    descripcion: String;
}
export default mongoose.model<IEstado>('Estado', eventoSchema);
