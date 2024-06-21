import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const animal = await prisma.animal.findMany({
    where: {
      name: {
        contains: "LAR",
        mode: "insensitive",
      },
    },
  });

  console.log({ animal });

  // const newAnimal = await prisma.animal.create({
  //   data: {
  //     name: "Bear",
  //     speed: 40, // km/h
  //     lifespan: "20-30 years",
  //   },
  // });
  // console.log({ newAnimal });
  // const allAnimals = await prisma.animal.findMany();
  // console.dir(allAnimals, { depth: null });
  // const updatedAnimal = await prisma.animal.update({
  //   where: { id: 3 },
  //   data: {
  //     name: "Brown Bear",
  //   },
  // });
  // console.log({ updatedAnimal });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
