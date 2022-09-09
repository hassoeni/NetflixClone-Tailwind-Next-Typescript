/*
  Warnings:

  - You are about to drop the column `Category` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `Description` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `Liked` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `LikedCount` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `Title` on the `Movie` table. All the data in the column will be lost.
  - Added the required column `cast` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `liked` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movielength` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `special` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialtype` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "Category",
DROP COLUMN "Description",
DROP COLUMN "Liked",
DROP COLUMN "LikedCount",
DROP COLUMN "Title",
ADD COLUMN     "cast" TEXT NOT NULL,
ADD COLUMN     "category" VARCHAR(255) NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "liked" BOOLEAN NOT NULL,
ADD COLUMN     "likedCount" SERIAL NOT NULL,
ADD COLUMN     "movielength" TEXT NOT NULL,
ADD COLUMN     "special" BOOLEAN NOT NULL,
ADD COLUMN     "specialtype" TEXT NOT NULL,
ADD COLUMN     "title" VARCHAR(255) NOT NULL;
