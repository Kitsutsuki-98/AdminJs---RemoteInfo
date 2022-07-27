import { model, Schema } from 'mongoose';

export enum Ruolo {
  Amministrazione = 'Amministrazione',
  Commerciale = 'Commerciale',
  IT = 'IT',
  Acquisti = 'Acquisti',
  Vendite = 'Vendite',
  CDQ = 'CDQ',
  CEO = 'CEO',
}
export enum Reparto {
  Amministrazione = 'Amministrazione',
  Commerciale = 'Commerciale',
  IT = 'IT',
  Acquisti = 'Acquisti',
  Vendite = 'Vendite',
  CDQ = 'CDQ',
}

export interface User {
  Nome: string;
  lastName: string;
  Cognome: string;
  email: string;
  èAttivo: boolean;
  Ruolo: string;
  Reparto: string;
}

export const UserSchema = new Schema<User>({
  Nome: { type: 'String', required: true },
  Cognome: { type: 'String', required: true },
  Ruolo: { type: 'String', required: true, enum: Ruolo },
  email: { type: 'String', required: true },
  èAttivo: { type: 'Boolean', required: true },
  Reparto: { type: 'String', required: true, enum: Reparto },
});

export const UserModel = model<User>('User', UserSchema);

