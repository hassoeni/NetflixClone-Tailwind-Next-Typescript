/*
  Warnings:

  - You are about to drop the column `title` on the `Serie` table. All the data in the column will be lost.
  - You are about to alter the column `episodeTitle` on the `Serie` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Serie" DROP COLUMN "title",
ALTER COLUMN "episodeTitle" SET DATA TYPE VARCHAR(255);
