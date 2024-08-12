import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "error",
    },
  ],
});

/*
Todo : Query Event Perform Here ** 
 prisma.$on("query", (e) => {
  console.log(e);
  });

*/

prisma.$on("error", (e) => {
  console.log(e);
});

const mainLogging = async () => {
  const allPosts = await prisma.post.findUniqueOrThrow({
    where: {
      id: 200,
    },
  });

  // console.dir(allPosts, {
  //   depth: Infinity,
  // });
};

mainLogging();
