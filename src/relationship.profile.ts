import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const profileCreate = async () => {
  const profile = await prisma.profile.create({
    data: {
      bio: "Want to be a fullstack developer.",
      userId: 1,
    },
  });

  console.log({
    profile,
  });
};

profileCreate();
