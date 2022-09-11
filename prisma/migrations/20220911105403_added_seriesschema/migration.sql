-- CreateTable
CREATE TABLE "Serie" (
    "episodeid" SERIAL NOT NULL,
    "seasonId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "parentmovieId" INTEGER NOT NULL,
    "episodeTitle" TEXT NOT NULL,
    "likedCount" SERIAL NOT NULL,
    "liked" BOOLEAN NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "synopsis" TEXT NOT NULL,
    "category" VARCHAR(255) NOT NULL,
    "viewed" BOOLEAN NOT NULL,
    "viewcount" INTEGER NOT NULL DEFAULT 0,
    "image" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "release_year" TIMESTAMP(3) NOT NULL,
    "cast" TEXT NOT NULL,
    "special" BOOLEAN NOT NULL,
    "specialtype" TEXT NOT NULL,
    "episodelength" TEXT NOT NULL,

    CONSTRAINT "Serie_pkey" PRIMARY KEY ("episodeid")
);

-- AddForeignKey
ALTER TABLE "Serie" ADD CONSTRAINT "Serie_parentmovieId_fkey" FOREIGN KEY ("parentmovieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
