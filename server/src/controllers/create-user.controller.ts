import { FastifyReply, FastifyRequest } from "fastify";
import { createUserService } from "../services/users/create-user.service";

interface CreateUserBody {
  name: string;
  email: string;
  password: string;
}

export async function createUserController(
  request: FastifyRequest<{ Body: CreateUserBody }>,
  reply: FastifyReply
) {
  const { name, email, password } = request.body;

  const user = await createUserService({
    name,
    email,
    password,
  });

  const token = await reply.jwtSign(
    {
      sub: user.id,
      role: user.role,
    },
    { expiresIn: "1h" }
  );

  return reply.status(201).send({
    message: `Bem-vindo, ${user.name}!`,
    token,
  });
}
