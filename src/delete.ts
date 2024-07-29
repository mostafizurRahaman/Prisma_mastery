import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deletes = async () => {
  //  Single Delete :
  // const singleDelete = await prisma.post.delete({
  //   where: {
  //     id: 43,
  //   },
  // });

  // console.log({ singleDelete });

  //  Multiple Delete **
  const multipleDelete = await prisma.post.deleteMany({
    where: {
      title: "title 2",
    },
  });

  console.log({ multipleDelete });
};

deletes();
