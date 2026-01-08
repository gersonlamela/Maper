import "@fastify/jwt";
import "fastify";

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: {
      sub: string;
      role?: "CUSTOMER" | "ADMIN";
    };
    user: {
      sub: string;
      role?: "CUSTOMER" | "ADMIN";
    };
  }
}
