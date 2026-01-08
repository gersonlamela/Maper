import { GetAllUsersOutput } from "../../@types/users/get-all-users.type";
import { db } from "../../db";
import { users } from "../../db/schema";

export async function getAllUsersService(): Promise<GetAllUsersOutput[]> {
  return await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      role: users.role,
    })
    .from(users);
}
