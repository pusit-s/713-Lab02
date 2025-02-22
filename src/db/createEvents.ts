import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createEvents() {
    const events = [
        {
            category: "Music",
            title: "Jazz Night",
            description: "An evening of smooth jazz",
            location: "New York",
            date: "2021-08-15",
            time: "20:00",
            petsAllowed: true,
        },
        {
            category: "Sports",
            title: "Football Match",
            description: "Local teams competing",
            location: "Los Angeles",
            date: "2021-09-10",
            time: "18:00",
            petsAllowed: false,
        },
        {
            category: "Theater",
            title: "Broadway Show",
            description: "A popular Broadway musical",
            location: "New York",
            date: "2021-10-05",
            time: "19:30",
            petsAllowed: false,
        },
        {
            category: "Technology",
            title: "Tech Conference",
            description: "Annual tech conference",
            location: "San Francisco",
            date: "2021-11-20",
            time: "09:00",
            petsAllowed: false,
        },
        {
            category: "Food",
            title: "Food Festival",
            description: "A festival of food trucks",
            location: "Austin",
            date: "2021-12-05",
            time: "12:00",
            petsAllowed: true,
        },
        {
            category: "Art",
            title: "Art Exhibition",
            description: "Modern art exhibition",
            location: "Chicago",
            date: "2022-01-15",
            time: "10:00",
            petsAllowed: false,
        }
    ]
    for (const event of events) {
        await prisma.event.create({
            data: {
                category: event.category,
                title: event.title,
                description: event.description,
                location: event.location,
                date: event.date,
                time: event.time,
                petsAllowed: event.petsAllowed,
            },
        });
    }
    const chiangMaiOrg = await prisma.organizer.create({
        data: {
            name: "Chiang Mai",
        },
    })
    
    const cmuOrg = await prisma.organizer.create({
        data: {
            name: "Chiang Mai University",
        },
    })
    
    const camtOrg = await prisma.organizer.create({
        data: {
            name: "CAMT",
        },
    })

    const responseEvent = await prisma.event.findMany()

    await prisma.event.update({
        where: {
            id: responseEvent[0].id,
        }, 
        data: {
            organizer: {
                connect: {
                    id: chiangMaiOrg.id,
                },
            },
        },
    })

    const responseEvent2 = await prisma.event.findMany({
        include: {
            organizer: true,
        },
    })

    console.log(responseEvent2)

    console.log("Database has been initialized with events");
}