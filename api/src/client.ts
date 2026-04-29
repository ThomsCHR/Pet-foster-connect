import { PrismaClient } from "../prisma/generated/prisma";
import "dotenv/config";

if (!process.env.DATABASE_URL) {
  throw new Error("La variable DATABASE_URL n'est pas définie dans les variables d'environnement");
}

export const prisma = new PrismaClient();