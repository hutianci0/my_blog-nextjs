/*
  Warnings:

  - You are about to drop the column `name` on the `NEXT_USER` table. All the data in the column will be lost.
  - Added the required column `nickname` to the `NEXT_USER` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NEXT_USER" DROP COLUMN "name",
ADD COLUMN     "Introduce" TEXT,
ADD COLUMN     "Job" TEXT,
ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "nickname" TEXT NOT NULL;
