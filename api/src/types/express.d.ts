declare namespace Express {
  interface Request {
    user?: { id: number; email: string; role: "volunteer" | "association" | "user" };
  }
}
