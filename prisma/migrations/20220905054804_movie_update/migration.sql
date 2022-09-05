-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "LikedCount" SERIAL NOT NULL,
    "Liked" BOOLEAN NOT NULL,
    "Title" VARCHAR(255) NOT NULL,
    "Description" VARCHAR(255) NOT NULL,
    "Category" VARCHAR(255) NOT NULL,
    "viewed" BOOLEAN NOT NULL,
    "viewcount" INTEGER NOT NULL DEFAULT 0,
    "image" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "release_year" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);
