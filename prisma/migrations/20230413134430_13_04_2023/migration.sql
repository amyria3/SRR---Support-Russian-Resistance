/*
  Warnings:

  - The required column `id` was added to the `Used Keyword` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "Used Resources_id_key";

-- AlterTable
ALTER TABLE "Used Keyword" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Used Keyword_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Used Resources" ADD CONSTRAINT "Used Resources_pkey" PRIMARY KEY ("id");
