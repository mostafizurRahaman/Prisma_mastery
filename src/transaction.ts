import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const performTransaction = async () => {
  const [posts, totalPosts] = await prisma.$transaction([
    prisma.post.create({
      data: {
        title: "What is Mouse?",
        content: "Mouse is an electronic components.",
        authorId: 2,
        published: false,
      },
    }),
    prisma.post.count(),
  ]);

  console.log({ posts, totalPosts });
};
// performTransaction();
