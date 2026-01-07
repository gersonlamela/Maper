import { hash } from "bcryptjs";
import {
  CreateUserInput,
  CreateUserOutput,
} from "../../@types/users/create-user.type";
import { db } from "../../db";
import { users } from "../../db/schema";

export async function createUserService(
  data: CreateUserInput
): Promise<CreateUserOutput> {
  const hashedPassword = await hash(data.password, 8);

  const [user] = await db
    .insert(users)
    .values({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: data.role ?? "CUSTOMER",
    })
    .returning({
      id: users.id,
      name: users.name,
      email: users.email,
      role: users.role,
    });

  return user;
}
