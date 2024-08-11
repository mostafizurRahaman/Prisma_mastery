import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.post.upsert({
    where: {
      id: 47,
    },
    update: {
      title: "Update Title",
    },
    create: {
      title: "Upserted title",
      content: "Upserted Content",
      authorId: 5,
    },
  });

  console.log({ result });
};

main();
