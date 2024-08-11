import { PrismaClient } from "@prisma/client";
import { create } from "domain";

//  CREATE Prisma client **
const prisma = new PrismaClient();

const main = async () => {
  //  single Create ***

  // const singleCreate = await prisma.post.create({
  //   data: {
  //     title: "Rabby Hossain",
  //     content: "Rabby Hossain",
  //     published: true,
  //   },
  // });

  // console.log({
  //   singleCreate,
  // });

  //   INSERT multiple data  into database **
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "title 1",
        content: "Content 1",
        authorId: 5,
      },
    ],
  });

  console.log({
    createMany,
  });
};

main();
