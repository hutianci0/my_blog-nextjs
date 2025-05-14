-- DropForeignKey
ALTER TABLE "NEXT_AUTH" DROP CONSTRAINT "NEXT_AUTH_UserId_fkey";

-- DropTable
DROP TABLE "NEXT_USER";

-- DropTable
DROP TABLE "NEXT_AUTH";

-- DropEnum
DROP TYPE "Identity_type";

-- CreateTable
CREATE TABLE "Books" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255),
    "pub_date" DATE,
    "category_id" INTEGER,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Msg" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,
    "userID" INTEGER,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Msg_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "fullname" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "membership" BOOLEAN NOT NULL DEFAULT false,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "image_url" VARCHAR(255) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoices" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "customer_id" UUID NOT NULL,
    "amount" INTEGER NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "date" DATE NOT NULL,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "revenue" (
    "month" VARCHAR(4) NOT NULL,
    "revenue" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key1" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key10" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key100" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key101" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key102" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key103" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key104" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key105" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key106" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key107" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key108" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key109" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key11" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key110" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key111" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key112" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key113" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key114" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key115" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key116" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key117" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key118" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key119" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key12" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key120" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key121" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key122" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key123" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key124" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key125" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key126" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key127" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key128" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key129" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key13" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key130" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key131" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key132" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key133" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key134" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key135" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key136" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key137" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key138" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key139" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key14" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key140" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key141" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key142" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key143" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key144" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key145" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key146" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key147" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key148" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key149" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key15" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key150" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key151" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key152" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key153" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key154" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key155" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key156" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key157" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key158" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key159" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key16" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key160" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key161" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key162" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key163" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key164" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key165" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key166" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key167" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key168" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key169" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key17" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key170" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key171" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key172" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key173" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key174" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key175" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key176" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key177" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key178" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key179" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key18" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key180" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key181" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key182" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key183" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key184" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key185" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key186" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key187" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key188" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key189" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key19" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key190" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key191" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key192" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key193" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key194" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key195" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key196" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key197" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key198" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key199" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key2" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key20" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key200" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key201" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key202" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key203" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key204" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key205" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key206" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key207" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key208" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key209" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key21" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key210" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key211" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key212" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key213" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key214" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key215" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key216" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key217" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key218" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key219" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key22" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key220" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key221" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key222" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key223" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key224" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key225" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key226" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key227" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key228" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key229" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key23" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key230" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key231" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key24" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key25" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key26" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key27" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key28" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key29" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key3" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key30" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key31" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key32" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key33" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key34" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key35" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key36" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key37" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key38" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key39" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key4" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key40" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key41" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key42" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key43" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key44" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key45" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key46" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key47" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key48" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key49" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key5" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key50" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key51" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key52" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key53" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key54" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key55" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key56" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key57" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key58" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key59" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key6" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key60" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key61" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key62" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key63" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key64" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key65" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key66" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key67" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key68" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key69" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key7" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key70" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key71" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key72" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key73" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key74" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key75" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key76" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key77" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key78" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key79" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key8" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key80" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key81" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key82" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key83" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key84" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key85" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key86" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key87" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key88" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key89" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key9" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key90" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key91" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key92" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key93" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key94" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key95" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key96" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key97" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key98" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key99" ON "User"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "revenue_month_key" ON "revenue"("month" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email" ASC);

-- AddForeignKey
ALTER TABLE "Books" ADD CONSTRAINT "Books_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Msg" ADD CONSTRAINT "Msg_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

