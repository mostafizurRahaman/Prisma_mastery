import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const UserCreate = async () => {
  const user = await prisma.user.create({
    data: {
      username: "mostafiz",
      email: "mostafiz@gamil.com",
      role: "user",
    },
  });

  console.log(user);
};

UserCreate();
