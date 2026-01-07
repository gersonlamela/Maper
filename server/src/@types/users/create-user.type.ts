import { UserRole } from "../../db/schema";

export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  role?: UserRole;
}

export interface CreateUserOutput {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
