import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   Data Insert into prisma **
  // const result = await prisma.post.create({
  //   data: {
  //     title: "mostafizur Rahaman",
  //     content: "Polok's internet works like polok.",
  //     published: true,
  //   },
  // });

  // console.log(result);

  // Data  Find :

  //**  Find By Many

  const findMany = await prisma.post.findMany({
    where: {
      published: false,
      title: {
        contains: "Mostafizur",
      },
    },
  });

  // console.log(findMany);

  //  Find First ** => It's  will return the first match***

  const findFirst = await prisma.post.findFirst({
    where: {
      published: true,
      title: {
        contains: "Mostafizur",
      },
    },
  });
  console.log({ findFirst });

  //  Find first and If not exists throw error ***

  const findFirstAndThrow = await prisma.post.findFirstOrThrow({
    where: {
      published: {
        equals: true,
      },
      content: {
        contains: "Mostafizur Rahaman",
      },
    },
  });

  console.log({
    findFirstAndThrow,
  });

  //  FInd Unique :  It's only find the the unique items and gets unique properties into where clause **

  const findUnique = await prisma.post.findUnique({
    where: {
      id: 45,
    },
  });

  console.log({
    findUnique,
  });

  //!  Find unique Or Throw Error : If data not exits with provided query, it's will throw an error **
  const findUniqueOrThrow = await prisma.post.findUniqueOrThrow({
    where: {
      id: 45,
    },
  });

  console.log({
    findUniqueOrThrow,
  });
};

// main();

const findAll = async () => {
  const all = await prisma.post.findMany({
    select: {
      title: true
    },
  });

  console.log({ all });
};

findAll();
