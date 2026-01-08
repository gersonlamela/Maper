import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { FastifyInstance } from "fastify";
import { db } from "../../db";
import { users } from "../../db/schema";

export async function loginRoute(app: FastifyInstance) {
  app.post("/login", async (request, reply) => {
    const { email, password } = request.body as {
      email: string;
      password: string;
    };

    if (!email || !password) {
      return reply.status(400).send({
        message: "Email e password são obrigatórios",
      });
    }

    const user = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (!user) {
      return reply.status(401).send({
        message: "Credenciais inválidas",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return reply.status(401).send({
        message: "Credenciais inválidas",
      });
    }

    const token = await reply.jwtSign(
      {
        sub: user.id,
        role: user.role,
      },
      { expiresIn: "1h" }
    );

    return reply.send({
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    });
  });
}
