import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const createCategory = async () => {
  const category = await prisma.category.create({
    data: {
      name: "software engineering",
    },
  });

  console.log({
    category,
  });
};

// createCategory();



