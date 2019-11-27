export interface User {
  name: string;
  firstname: string;
  pseudo: string;
  email: string;
  password: string;
  confirmPassword?: string;
  birth: string;
  sexe: string;
  grade: string;
  date?: Date;
  avatar?: string;
  _id?: string;
  invitations?: string[];
  requests?: string[];
  friends?: string[];
  admin?: boolean;
}
