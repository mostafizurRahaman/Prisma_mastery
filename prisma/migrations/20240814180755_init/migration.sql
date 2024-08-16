-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);
