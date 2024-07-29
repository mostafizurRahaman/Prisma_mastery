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
        content: "Content 3",
      },
      {
        title: "title 4",
        content: "Content 4",
      },
      {
        title: "title 5",
        content: "Content 5",
      },
      {
        title: "title 6",
        content: "Content 6",
      },
      {
        title: "title 7",
        content: "Content 7",
      },
      {
        title: "title 8",
        content: "Content 8",
      },
      {
        title: "title 9",
        content: "Content 9",
      },
      {
        title: "title 10",
        content: "Content 10",
      },
      {
        title: "title 11",
        content: "Content 11",
      },
      {
        title: "title 12",
        content: "Content 12",
      },
      {
        title: "title 13",
        content: "Content 13",
      },
      {
        title: "title 14",
        content: "Content 14",
      },
      {
        title: "title 15",
        content: "Content 15",
      },
      {
        title: "title 16",
        content: "Content 16",
      },
      {
        title: "title 17",
        content: "Content 17",
      },
      {
        title: "title 18",
        content: "Content 18",
      },
      {
        title: "title 19",
        content: "Content 19",
      },
      {
        title: "title 20",
        content: "Content 20",
      },
    ],
  });

  console.log({
    createMany,
  });
};

main();
