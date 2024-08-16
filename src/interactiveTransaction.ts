import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interactiveTransaction = (
  fromId: number,
  toId: number,
  amount: number
) => {
  return prisma.$transaction(async (ctx) => {
    const sender = await ctx.person.update({
      data: {
        amount: {
          decrement: amount,
        },
      },
      where: {
        id: fromId,
      },
    });

    if (sender.amount < 0) {
      throw new Error("Send Have no Enough Money!!! 🥹");
    }

    const receiver = await ctx.person.update({
      data: {
        amount: {
          increment: amount,
        },
      },
      where: {
        id: toId,
      },
    });

    return receiver;
  });
};

const createPerson = async (name: string, amount: number) => {
  const p = await prisma.person.create({
    data: {
      name,
      amount,
    },
  });
  console.log(p);
};

// createPerson('mukta', 1000)
async function main() {
  const receiver1 = await interactiveTransaction(2, 1, 1500);
  console.log(receiver1);
}

// main()


