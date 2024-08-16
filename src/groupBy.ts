import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const groupByAndFiltering = async () => {
  const groupByAge = await prisma.user.groupBy({
    by: ["age"],
    where: {
      age: {
        gte: 15,
      },
    },
    _sum: {
      age: true,
    },
    _count: {
      age: true,
    },
  });

  console.dir(
    { groupByAge },
    {
      depth: Infinity,
    }
  );
};

groupByAndFiltering();


const aggregation = async() => {
  const users = await prisma.user.aggregate({
    _max: {
      age : true
    }
  })

  console.log("aggregation", users);
}

aggregation();


