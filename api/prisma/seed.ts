import { PrismaClient } from '../prisma/generated/prisma'
import argon2 from 'argon2'

const prisma = new PrismaClient()

async function main() {
  await prisma.offer.deleteMany()
  await prisma.image.deleteMany()
  await prisma.animal.deleteMany()
  await prisma.volunteer.deleteMany()
  await prisma.association.deleteMany()
  await prisma.users.deleteMany()

  const passwordHash = await argon2.hash('password123')

  // --- ASSOCIATIONS ---
  const asso1 = await prisma.users.create({
    data: {
      email: 'asso1@pfc.fr',
      password: passwordHash,
      phone: '0601020304',
      address: '12 rue des Chats, Lyon',
      region: 'Auvergne_Rhone_Alpes',
      description: 'Association engagée pour le bien-être animal depuis 2005.',
      association: {
        create: {
          name: 'Les Pattes Douces',
          siret: '12345678901234',
          animals: {
            create: [
              {
                name: 'Luna',
                species: 'Chat',
                gender: 'Femelle',
                dateOfBirth: new Date('2021-03-15'),
                description: 'Chatte douce et câline, très sociable avec les enfants.',
                status: 'a_placer',
                images: {
                  create: [
                    { url: 'https://placecats.com/300/200', thumb: 'https://placecats.com/100/100' },
                    { url: 'https://placecats.com/301/200', thumb: 'https://placecats.com/101/100' },
                  ]
                }
              },
              {
                name: 'Milo',
                species: 'Chat',
                gender: 'Mâle',
                dateOfBirth: new Date('2020-08-10'),
                description: 'Chat joueur et indépendant, aime les espaces ouverts.',
                status: 'a_placer',
                images: {
                  create: [
                    { url: 'https://placecats.com/302/200', thumb: 'https://placecats.com/102/100' },
                  ]
                }
              },
              {
                name: 'Rex',
                species: 'Chien',
                gender: 'Mâle',
                dateOfBirth: new Date('2019-06-01'),
                description: 'Chien énergique, a besoin d\'un grand espace et de beaucoup d\'exercice.',
                status: 'placement_en_cours',
                images: {
                  create: [
                    { url: 'https://placedog.net/300/200', thumb: 'https://placedog.net/100/100' },
                  ]
                }
              },
            ]
          }
        }
      }
    }
  })

  const asso2 = await prisma.users.create({
    data: {
      email: 'asso2@pfc.fr',
      password: passwordHash,
      phone: '0611223344',
      address: '8 boulevard des Animaux, Bordeaux',
      region: 'Nouvelle_Aquitaine',
      description: 'Refuge spécialisé dans le sauvetage d\'animaux abandonnés.',
      association: {
        create: {
          name: 'Refuge du Soleil',
          siret: '98765432109876',
          animals: {
            create: [
              {
                name: 'Bella',
                species: 'Chien',
                gender: 'Femelle',
                dateOfBirth: new Date('2022-01-20'),
                description: 'Chienne adorable et affectueuse, parfaite en famille.',
                status: 'a_placer',
                images: {
                  create: [
                    { url: 'https://placedog.net/301/200', thumb: 'https://placedog.net/101/100' },
                    { url: 'https://placedog.net/302/200', thumb: 'https://placedog.net/102/100' },
                  ]
                }
              },
              {
                name: 'Noisette',
                species: 'Lapin',
                gender: 'Femelle',
                dateOfBirth: new Date('2023-04-05'),
                description: 'Lapine très calme, idéale pour un appartement.',
                status: 'a_placer',
                images: {
                  create: [
                    { url: 'https://picsum.photos/seed/rabbit1/300/200', thumb: 'https://picsum.photos/seed/rabbit1/100/100' },
                  ]
                }
              },
              {
                name: 'Gribouille',
                species: 'Chat',
                gender: 'Mâle',
                dateOfBirth: new Date('2018-11-30'),
                description: 'Vieux chat sage et tranquille, cherche foyer calme.',
                status: 'retire',
                images: {
                  create: [
                    { url: 'https://placecats.com/303/200', thumb: 'https://placecats.com/103/100' },
                  ]
                }
              },
            ]
          }
        }
      }
    }
  })

  // --- VOLUNTEERS ---
  const vol1 = await prisma.users.create({
    data: {
      email: 'volunteer1@pfc.fr',
      password: passwordHash,
      phone: '0607080910',
      address: '5 avenue des Chiens, Paris',
      region: 'Ile_de_France',
      description: 'Famille avec jardin, expérience avec chiens et chats.',
      volunteer: {
        create: {
          lastname: 'Dupont',
          firstname: 'Marie',
          capacity: 'Chiens et chats',
        }
      }
    }
  })

  const vol2 = await prisma.users.create({
    data: {
      email: 'volunteer2@pfc.fr',
      password: passwordHash,
      phone: '0698765432',
      address: '3 rue des Lilas, Nantes',
      region: 'Pays_de_la_Loire',
      description: 'Retraité calme avec grand appartement, aime les animaux paisibles.',
      volunteer: {
        create: {
          lastname: 'Martin',
          firstname: 'Jean',
          capacity: 'Chats et petits animaux',
        }
      }
    }
  })

  // --- OFFERS ---
  const assoc1 = await prisma.association.findUnique({ where: { userId: asso1.id }, include: { animals: true } })
  const assoc2 = await prisma.association.findUnique({ where: { userId: asso2.id }, include: { animals: true } })
  const volunteer1 = await prisma.volunteer.findUnique({ where: { userId: vol1.id } })
  const volunteer2 = await prisma.volunteer.findUnique({ where: { userId: vol2.id } })

  await prisma.offer.createMany({
    data: [
      { status: 'soumise',  animalId: assoc1!.animals[2].id, volunteerId: volunteer1!.id },
      { status: 'acceptee', animalId: assoc2!.animals[0].id, volunteerId: volunteer1!.id },
      { status: 'soumise',  animalId: assoc2!.animals[1].id, volunteerId: volunteer2!.id },
      { status: 'refusee',  animalId: assoc1!.animals[0].id, volunteerId: volunteer2!.id },
    ]
  })

  console.log('Seed terminé ✅')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })