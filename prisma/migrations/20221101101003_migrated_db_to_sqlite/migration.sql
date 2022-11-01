-- CreateTable
CREATE TABLE "Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "likedCount" INTEGER NOT NULL,
    "liked" BOOLEAN NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "viewed" BOOLEAN NOT NULL,
    "viewcount" INTEGER NOT NULL DEFAULT 0,
    "image" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "release_year" DATETIME NOT NULL,
    "cast" TEXT NOT NULL,
    "special" BOOLEAN NOT NULL,
    "specialtype" TEXT NOT NULL,
    "movielength" TEXT NOT NULL,
    "isaserie" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Serie" (
    "episodeid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "seasonId" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "parentmovieId" INTEGER NOT NULL,
    "episodeTitle" TEXT NOT NULL,
    "likedCount" INTEGER NOT NULL,
    "liked" BOOLEAN NOT NULL,
    "synopsis" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "viewed" BOOLEAN NOT NULL,
    "viewcount" INTEGER NOT NULL DEFAULT 0,
    "image" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "release_year" DATETIME NOT NULL,
    "cast" TEXT NOT NULL,
    "special" BOOLEAN NOT NULL,
    "specialtype" TEXT NOT NULL,
    "episodelength" TEXT NOT NULL,
    CONSTRAINT "Serie_parentmovieId_fkey" FOREIGN KEY ("parentmovieId") REFERENCES "Movie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "verificationtokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "verificationtokens_token_key" ON "verificationtokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "verificationtokens_identifier_token_key" ON "verificationtokens"("identifier", "token");
