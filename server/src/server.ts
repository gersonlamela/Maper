import jwt from "@fastify/jwt";
import "dotenv/config";
import fastify from "fastify";
import { loginRoute } from "./routes/auth/signin";
import { productsRoutes } from "./routes/products";
import { usersRoutes } from "./routes/user";

const app = fastify({
  logger: true,
});

// 🔐 JWT primeiro
app.register(jwt, {
  secret: process.env.JWT_SECRET ?? "supersecret",
});

// 🌐 Rotas
app.register(usersRoutes, { prefix: "/api" });
app.register(productsRoutes, { prefix: "/api" });
app.register(loginRoute, { prefix: "/api/auth/" });
// 🚑 Health check

app.get("/health", async () => {
  return { status: "ok" };
});

app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("🚀 Server running on http://localhost:3333");
});
