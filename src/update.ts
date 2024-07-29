import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //  Single update :
  // const singleUpdate = await prisma.post.update({
  //   data: {
  //     title: "Special Title -1",
  //   },
  //   where: {
  //     id: 43,
  //   },
  // });

  // console.log({ singleUpdate });

  //  Multiple row update **
  const updateMultipleRow = await prisma.post.updateMany({
    where: {
      title: "title 2",
    },
    data: {
      published: true,
    },
  });

  console.log({ updateMultipleRow });
};

updates();
