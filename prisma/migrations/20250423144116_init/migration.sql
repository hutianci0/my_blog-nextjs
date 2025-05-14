-- CreateEnum
CREATE TYPE "Identity_type" AS ENUM ('phone', 'github');

-- CreateTable
CREATE TABLE "NEXT_USER" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NEXT_USER_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NEXT_AUTH" (
    "id" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL,
    "Identity_type" "Identity_type" NOT NULL DEFAULT 'phone',
    "Identifier" TEXT NOT NULL,
    "credential" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NEXT_AUTH_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NEXT_AUTH" ADD CONSTRAINT "NEXT_AUTH_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "NEXT_USER"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
