import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const createPost = async () => {
  const post = await prisma.post.create({
    data: {
      title: "What is Javascript??",
      content:
        "Javascript is a programming language, interpreted, high level, object oriented language.",
      authorId: 1,
      published: true,
      postCategory: {
        // create: {
        //   categoryId: 1,
        // },
        create: {
          category: {
            connect: {
              id: 3,
            },
          },
        },
      },
    },
    include: {
      postCategory: {
        select: {
          categoryId: true,
          postId: true,
        },
      },
      author: true,
    },
  });
  console.log({
    post: post.postCategory[0],
  });
};

// createPost();

const createNewPost = async () => {
  const post = await prisma.post.create({
    data: {
      title: "What is React Js ?",
      content:
        "React Js is an JavaScript Framework, Which Used to develop Interactive UI.",
      authorId: 1,
      postCategory: {
        create: [
          {
            category: {
              connect: {
                id: 3,
              },
            },
          },
          {
            category: {
              connect: {
                id: 1,
              },
            },
          },
          {
            category: {
              connect: {
                id: 2,
              },
            },
          },
        ],
      },
    },
    include: {
      postCategory: {
        select: {
          categoryId: true,
          category: true,
          post: {
            select: {
              content: true,
            },
          },
          postId: true,
        },
      },
    },
  });

  console.log(post);
};

createNewPost();
