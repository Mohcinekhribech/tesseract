/*
  Warnings:

  - You are about to drop the column `function` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Profile" DROP COLUMN "function",
ADD COLUMN     "role" TEXT;
