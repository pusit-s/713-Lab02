import { PrismaClient } from "@prisma/client";
import { createEvents } from "./db/createEvents";

const prisma = new PrismaClient();

createEvents().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
}
);