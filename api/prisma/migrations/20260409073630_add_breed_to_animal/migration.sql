/*
  Warnings:

  - The values [retire] on the enum `AnimalStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AnimalStatus_new" AS ENUM ('a_placer', 'placement_en_cours', 'adopte', 'place');
ALTER TABLE "animal" ALTER COLUMN "status" TYPE "AnimalStatus_new" USING ("status"::text::"AnimalStatus_new");
ALTER TYPE "AnimalStatus" RENAME TO "AnimalStatus_old";
ALTER TYPE "AnimalStatus_new" RENAME TO "AnimalStatus";
DROP TYPE "public"."AnimalStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "animal" ADD COLUMN     "breed" TEXT;
