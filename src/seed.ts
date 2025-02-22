import { PrismaClient } from "@prisma/client";
import { createEvents } from "./db/createEvents";
import { createParticipants } from "./db/createParticipants";

const prisma = new PrismaClient();

// createParticipants().catch((e) => {
//     console.error(e);
//     process.exit(1);
// }).finally(async () => {
//     await prisma.$disconnect();
// }
// );

async function main() {
    const events = await createEvents();
    const participant = await createParticipants();
    console.log(events);
    console.log(participant);
}

main()