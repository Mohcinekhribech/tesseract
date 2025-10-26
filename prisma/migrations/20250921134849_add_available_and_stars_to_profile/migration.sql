-- AlterTable
ALTER TABLE "public"."Profile" ADD COLUMN     "available" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "stars" INTEGER NOT NULL DEFAULT 0;
