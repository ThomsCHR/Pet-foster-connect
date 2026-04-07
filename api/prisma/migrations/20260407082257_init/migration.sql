-- CreateEnum
CREATE TYPE "Region" AS ENUM ('Auvergne_Rhone_Alpes', 'Bourgogne_Franche_Comte', 'Bretagne', 'Centre_Val_de_Loire', 'Corse', 'Grand_Est', 'Hauts_de_France', 'Ile_de_France', 'Normandie', 'Nouvelle_Aquitaine', 'Occitanie', 'Pays_de_la_Loire', 'Provence_Alpes_Cote_Azur', 'Guadeloupe', 'Martinique', 'Guyane', 'La_Reunion', 'Mayotte');

-- CreateEnum
CREATE TYPE "AnimalStatus" AS ENUM ('a_placer', 'placement_en_cours', 'adopte', 'retire', 'place');

-- CreateEnum
CREATE TYPE "OfferStatus" AS ENUM ('soumise', 'annulee', 'acceptee', 'refusee');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "image" TEXT,
    "region" "Region",
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "association" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "siret" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "association_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "volunteer" (
    "id" SERIAL NOT NULL,
    "lastname" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "volunteer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "animal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "status" "AnimalStatus" NOT NULL,
    "associationId" INTEGER NOT NULL,
    "volunteerId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "thumb" TEXT NOT NULL,
    "animalID" INTEGER NOT NULL,

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "offer" (
    "status" "OfferStatus" NOT NULL,
    "animalId" INTEGER NOT NULL,
    "volunteerId" INTEGER NOT NULL,

    CONSTRAINT "offer_pkey" PRIMARY KEY ("volunteerId","animalId")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "association_siret_key" ON "association"("siret");

-- CreateIndex
CREATE UNIQUE INDEX "association_userId_key" ON "association"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "volunteer_userId_key" ON "volunteer"("userId");

-- AddForeignKey
ALTER TABLE "association" ADD CONSTRAINT "association_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volunteer" ADD CONSTRAINT "volunteer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animal" ADD CONSTRAINT "animal_associationId_fkey" FOREIGN KEY ("associationId") REFERENCES "association"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animal" ADD CONSTRAINT "animal_volunteerId_fkey" FOREIGN KEY ("volunteerId") REFERENCES "volunteer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "image" ADD CONSTRAINT "image_animalID_fkey" FOREIGN KEY ("animalID") REFERENCES "animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offer" ADD CONSTRAINT "offer_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offer" ADD CONSTRAINT "offer_volunteerId_fkey" FOREIGN KEY ("volunteerId") REFERENCES "volunteer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
