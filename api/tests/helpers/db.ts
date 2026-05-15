import { prisma } from "../../src/client";

// Supprime tous les utilisateurs — tout cascade (association, volunteer, animal, offer, image)
export async function cleanDb() {
  await prisma.users.deleteMany();
}
