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
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop',
      association: {
        create: {
          name: 'Les Pattes Douces',
          siret: '12345678901234',
          animals: {
            create: [
              {
                name: 'Luna',
                species: 'Chat',
                breed: 'Européen',
                gender: 'Femelle',
                dateOfBirth: new Date('2021-03-15'),
                description: 'Chatte douce et câline, très sociable avec les enfants.',
                status: 'a_placer',
                images: {
                  create: [
                    { url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop', thumb: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&auto=format&fit=crop' },
                    { url: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&auto=format&fit=crop', thumb: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=200&auto=format&fit=crop' },
                  ]
                }
              },
              {
                name: 'Milo',
                species: 'Chat',
                breed: 'Maine Coon',
                gender: 'Mâle',
                dateOfBirth: new Date('2020-08-10'),
                description: 'Chat joueur et indépendant, aime les espaces ouverts.',
                status: 'a_placer',
                images: {
                  create: [
                    { url: 'https://images.unsplash.com/photo-1472491235688-bdc81a63246e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', thumb: 'https://images.unsplash.com/photo-1472491235688-bdc81a63246e?q=80&w=200&auto=format&fit=crop' },
                  ]
                }
              },
              {
                name: 'Rex',
                species: 'Chien',
                breed: 'Berger Allemand',
                gender: 'Mâle',
                dateOfBirth: new Date('2019-06-01'),
                description: 'Chien énergique, a besoin d\'un grand espace et de beaucoup d\'exercice.',
                status: 'a_placer',
                images: {
                  create: [
                    { url: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=800&auto=format&fit=crop', thumb: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=200&auto=format&fit=crop' },
                  ]
                }
              },
              {
                name: 'Cannelle',
                species: 'Chat',
                breed: 'Siamois',
                gender: 'Femelle',
                dateOfBirth: new Date('2022-07-18'),
                description: 'Chatte curieuse et bavarde, adore jouer et explorer.',
                status: 'a_placer',
                images: {
                  create: [
                    { url: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=800&auto=format&fit=crop', thumb: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=200&auto=format&fit=crop' },
                  ]
                }
              },
              {
                name: 'Oscar',
                species: 'Chien',
                breed: 'Golden Retriever',
                gender: 'Mâle',
                dateOfBirth: new Date('2021-11-03'),
                description: 'Chien doux et obéissant, parfait avec les enfants et autres animaux.',
                status: 'a_placer',
                images: {
                  create: [
                    { url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&auto=format&fit=crop', thumb: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&auto=format&fit=crop' },
                  ]
                }
              },
              {
                name: 'Filou',
                species: 'Chat',
                breed: 'Angora',
                gender: 'Mâle',
                dateOfBirth: new Date('2023-02-14'),
                description: 'Chat espiègle et affectueux, aime les câlins.',
                status: 'a_placer',
                images: {
                  create: [
                    { url: 'https://images.unsplash.com/photo-1640384974326-3e72680e0fb3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', thumb: 'https://images.unsplash.com/photo-1640384974326-3e72680e0fb3?q=80&w=200&auto=format&fit=crop' },
                  ]
                }
              },
              {
                name: 'Perle',
                species: 'Chat',
                breed: 'Ragdoll',
                gender: 'Femelle',
                dateOfBirth: new Date('2020-05-22'),
                description: 'Chatte sereine et très câline, s\'entend bien avec tout le monde.',
                status: 'a_placer',
                images: {
                  create: [
                    { url: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&auto=format&fit=crop', thumb: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=200&auto=format&fit=crop' },
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
      image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=800&auto=format&fit=crop',
      association: {
        create: {
          name: 'Refuge du Soleil',
          siret: '98765432109876',
          animals: {
            create: [
              {
                name: 'Bella',
                species: 'Chien',
                breed: 'Labrador',
                gender: 'Femelle',
                dateOfBirth: new Date('2022-01-20'),
                description: 'Chienne adorable et affectueuse, parfaite en famille.',
                status: 'a_placer',
                images: {
                  create: [
                    { url: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&auto=format&fit=crop', thumb: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=200&auto=format&fit=crop' },
                    
                  ]
                }
              },
              {
                name: 'Noisette',
                species: 'Chat',
                breed: 'Européen',
                gender: 'Femelle',
                dateOfBirth: new Date('2023-04-05'),
                description: 'Chatte très calme, idéale pour un appartement.',
                status: 'a_placer',
                images: {
                  create: [
                    { url: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=800&auto=format&fit=crop', thumb: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=200&auto=format&fit=crop' },
                  ]
                }
              },
              {
                name: 'Gribouille',
                species: 'Chat',
                breed: 'Persan',
                gender: 'Mâle',
                dateOfBirth: new Date('2018-11-30'),
                description: 'Vieux chat sage et tranquille, cherche foyer calme.',
                status: 'place',
                images: {
                  create: [
                    { url: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=800&auto=format&fit=crop', thumb: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=200&auto=format&fit=crop' },
                  ]
                }
              },
              {
                name: 'Caramel',
                species: 'Chien',
                breed: 'Beagle',
                gender: 'Mâle',
                dateOfBirth: new Date('2022-09-07'),
                description: 'Chien curieux et joueur, s\'adapte facilement à la vie en famille.',
                status: 'a_placer',
                images: {
                  create: [
                    { url: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&auto=format&fit=crop', thumb: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=200&auto=format&fit=crop' },
                  ]
                }
              },
              {
                name: 'Princesse',
                species: 'Chat',
                breed: 'Angora',
                gender: 'Femelle',
                dateOfBirth: new Date('2021-01-12'),
                description: 'Chatte élégante et douce, préfère un foyer calme sans autres animaux.',
                status: 'a_placer',
                images: {
                  create: [
                    { url: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=800&auto=format&fit=crop', thumb: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=200&auto=format&fit=crop' },
                  ]
                }
              },
              {
                name: 'Réglisse',
                species: 'Chat',
                breed: 'Nain',
                gender: 'Femelle',
                dateOfBirth: new Date('2023-06-30'),
                description: 'Petite chatte noire très curieuse, idéale en appartement.',
                status: 'a_placer',
                images: {
                  create: [
                    { url: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=800&auto=format&fit=crop', thumb: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=200&auto=format&fit=crop' },
                  ]
                }
              },
              {
                name: 'Titan',
                species: 'Chien',
                breed: 'Husky',
                gender: 'Mâle',
                dateOfBirth: new Date('2020-03-25'),
                description: 'Chien plein d\'énergie, a besoin de longues balades quotidiennes.',
                status: 'a_placer',
                images: {
                  create: [
                    { url: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=800&auto=format&fit=crop', thumb: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=200&auto=format&fit=crop' },
                  ]
                }
              },
              {
                name: 'Cookie',
                species: 'Chat',
                breed: 'British Shorthair',
                gender: 'Mâle',
                dateOfBirth: new Date('2022-12-01'),
                description: 'Chat placide et affectueux, aime rester au chaud et être câliné.',
                status: 'a_placer',
                images: {
                  create: [
                    { url: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&auto=format&fit=crop', thumb: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=200&auto=format&fit=crop' },
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