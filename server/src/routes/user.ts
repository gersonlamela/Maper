import { FastifyInstance } from "fastify";
import { createUserController } from "../controllers/users/create-user.controller";
import { getAllUsersController } from "../controllers/users/get-all-users.controller";
import { authenticate } from "../middlewares/authenticate";
import { isAdmin } from "../middlewares/isAdmin";

export async function usersRoutes(app: FastifyInstance) {
  app.post(
    "/users",
    {
      schema: {
        body: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: { type: "string", minLength: 2 },
            email: { type: "string", format: "email" },
            password: { type: "string", minLength: 6 },
          },
        },
        response: {
          201: {
            type: "object",
            properties: {
              message: { type: "string" },
              token: { type: "string" },
            },
          },
        },
      },
    },
    createUserController
  );

  app.get(
    "/users",
    {
      preHandler: [authenticate, isAdmin],
      schema: {
        response: {
          200: {
            type: "object",
            properties: {
              users: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: { type: "string" },
                    name: { type: "string" },
                    email: { type: "string" },
                    role: { type: "string" },
                  },
                },
              },
            },
          },
        },
      },
    },
    getAllUsersController
  );
}
