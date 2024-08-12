import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  const user = await prisma.user.findFirst({
    where: {
      id: 1,
    },
    include: {
      profile: true,
      post: true,
    },
  });

  //  Fluent Api In Prisma **
  const userPosts = await prisma.user
    .findUnique({
      where: {
        id: 1,
      },
    })
    .profile();

  //  Filter Based on Relation **
  const publishedUsers = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });

  //  Filter Based On Relationship **
  const publishedUsers1 = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: false,
        },
      },
    },
  });

  //  FilterThe documents : Where title contains "React" word and ths post is published.
  const publishedReactPosts = await prisma.post.findMany({
    where: {
      AND: [
        {
          content: {
            contains: "React",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  //  ** OR Filtering :
  const publishedReactPostsWithOrFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          content: {
            contains: "Javascript",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  //  Not Filtering **
  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          content: {
            endsWith: "e.",
          },
        },
        {
          published: false,
        },
      ],
    },
  });

  //  ** In Operator **
  const InOperator = await prisma.user.findMany({
    where: {
      username: {
        in: ["fahim", "mostafiz"],
      },
    },
  });

  // const createUsers = await prisma.user.createMany({
  //   data: [
  //     {
  //       username: "smriti",
  //       email: "smriti@gamil.com",
  //       role: "user",
  //     },
  //     {
  //       username: "ratul",
  //       email: "ratul@gmail.com",
  //       role: "user",
  //     },
  //     {
  //       username: "roman",
  //       email: "roman@gmail.com",
  //       role: "user",
  //     },
  //   ],
  // });

  const NotInOperatorExp = await prisma.user.findMany({
    where: {
      username: {
        notIn: ["priti", "smriti"],
      },
    },
  });

  console.dir(NotInOperatorExp, { depth: Infinity });
};

relationalQueries();
