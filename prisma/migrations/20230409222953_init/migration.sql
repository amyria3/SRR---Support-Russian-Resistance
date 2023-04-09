-- CreateTable
CREATE TABLE "TypesOfRessource" (
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Ngos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,

    CONSTRAINT "Ngos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Used Resources" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ngo" TEXT NOT NULL,
    "typeOfRessourceName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Used Keyword" (
    "keyword" TEXT NOT NULL,
    "ngoId" TEXT,
    "protoKeywordProtoKeyword" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Prototype Keyword" (
    "protoKeyword" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TypesOfRessource_name_key" ON "TypesOfRessource"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Ngos_name_key" ON "Ngos"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Used Resources_id_key" ON "Used Resources"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Used Resources_url_key" ON "Used Resources"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Used Keyword_keyword_key" ON "Used Keyword"("keyword");

-- CreateIndex
CREATE UNIQUE INDEX "Prototype Keyword_protoKeyword_key" ON "Prototype Keyword"("protoKeyword");

-- AddForeignKey
ALTER TABLE "Used Resources" ADD CONSTRAINT "Used Resources_ngo_fkey" FOREIGN KEY ("ngo") REFERENCES "Ngos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Used Resources" ADD CONSTRAINT "Used Resources_typeOfRessourceName_fkey" FOREIGN KEY ("typeOfRessourceName") REFERENCES "TypesOfRessource"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Used Keyword" ADD CONSTRAINT "Used Keyword_ngoId_fkey" FOREIGN KEY ("ngoId") REFERENCES "Ngos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Used Keyword" ADD CONSTRAINT "Used Keyword_protoKeywordProtoKeyword_fkey" FOREIGN KEY ("protoKeywordProtoKeyword") REFERENCES "Prototype Keyword"("protoKeyword") ON DELETE RESTRICT ON UPDATE CASCADE;
