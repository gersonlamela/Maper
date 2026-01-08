import { FastifyReply, FastifyRequest } from "fastify";
import { getAllUsersService } from "../../services/users/get-all-users.service";

export async function getAllUsersController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const users = await getAllUsersService();

  return reply.status(201).send({
    users,
  });
}
