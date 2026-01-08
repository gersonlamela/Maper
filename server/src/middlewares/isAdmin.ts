export async function isAdmin(request: any, reply: any) {
  console.log("Checking admin role for user:", request.user);
  const user = request.user;

  if (user.role !== "ADMIN") {
    return reply.status(403).send({
      message: "Access denied. Admins only.",
    });
  }
}
