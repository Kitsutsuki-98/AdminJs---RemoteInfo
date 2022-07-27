import {model, Schema, Types} from 'mongoose';

export interface Computer  {
    Hostname: String;
    Utilizzatori: Types.ObjectId[];
    Sistema_Operativo: {
        Version: string;
        Patch: string;
    };
    Modello: string;
    Memorie: {
        RAM_libera: string;
        RAM: string;
        HDD: string;
        SSD: string;
    };
    Hardware: {
        CPU: string;
        GPU: string;
        GPU_RAM: string;
        GPU_Memoria: string;
        GPU_Tipo: string;
        GPU_Versione: string;
        GPU_Patch: string;
        GPU_Driver: string;
  };
    Software: {
        Software: string;
        Versione: string;
        Patch: string;
    };
    Data: {
        Data_Installazione: Date;
        Data_Ultima_Verifica: Date;
        Data_Ultima_Modifica: Date;
    };
    Note: string;
    createdAt: Date;
    updatedAt: Date;
}

export const ComputerSchema = new Schema<Computer>({
    Utilizzatori: [{ type: Types.ObjectId, ref: 'User' }],
    Hostname:{ type: 'String', required: false },
    Sistema_Operativo: new Schema(
    {
        Version: { type: 'String', required: false },
        Patch: { type: 'String', required: false },   
    },
    { _id: false }
    ),
    Modello: { type: 'String', required: false },
    Memorie: new Schema({
        RAM_libera: { type: 'String', required: false },
        RAM: { type: 'String', required: false },
        HDD: { type: 'String', required: false },
        SSD: { type: 'String', required: false },
    },
    { _id: false }
    ),
    Hardware: new Schema ({
        CPU: { type: 'String', required: false },
        GPU: { type: 'String', required: false },
        GPU_RAM: { type: 'String', required: false },
        GPU_Memoria: { type: 'String', required: false },
        GPU_Tipo: { type: 'String', required: false },
        GPU_Versione: { type: 'String', required: false },
        GPU_Patch: { type: 'String', required: false },
        GPU_Driver: { type: 'String', required: false },
    },
    { _id: false }
    ),
    Software: new Schema({
        Software: { type: 'String', required: false },
        Versione: { type: 'String', required: false },
        Patch: { type: 'String', required: false },
    },
    { _id: false }
    ),
    Data: new Schema({
        Data_Installazione: { type: 'Date', required: false },
        Data_Ultima_Verifica: { type: 'Date', required: false },
        Data_Ultima_Modifica: { type: 'Date', required: false },
    },
    { _id: false }
    ),
    Note: { type: 'String', required: false },
    createdAt: { type: 'Date', required: false },
    updatedAt: { type: 'Date', required: false },
}
, { timestamps: true }
);

export const ComputerModel = model<Computer>('Computer', ComputerSchema);
    