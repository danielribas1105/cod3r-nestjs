-- CreateTable
CREATE TABLE "Obras" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "status" BOOLEAN NOT NULL
);
