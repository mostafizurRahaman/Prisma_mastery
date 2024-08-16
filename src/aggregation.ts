import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregationFunction = async () => {
  //  average age **
  const posts = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  //  Count **
  const countAgeBasedRows = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });

  console.log("countAgeBasedRows", countAgeBasedRows);

  //  Count Total rows **
  const totalRows = await prisma.post.count();
  console.table(totalRows);

  //  Filter Max age user **
  const maxAgeUser = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });

  console.log("maxAgeUser", maxAgeUser);

  //  Filter Min age user **
  const minAgeUser = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });

  console.table({ minAgeUser });
};

aggregationFunction();
