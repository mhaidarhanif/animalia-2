-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "speed" DOUBLE PRECISION,
    "lifespan" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Habitat" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Habitat_pkey" PRIMARY KEY ("id")
);
