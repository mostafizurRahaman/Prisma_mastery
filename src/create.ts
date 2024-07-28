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
      },
      {
        title: "title 2",
        content: "Content 2",
      },
      {
        title: "title 3",
        content: " Content 3",
      },
    ],
  });

  console.log({
    createMany,
  });
};

main();
