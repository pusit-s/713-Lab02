import { PrismaClient } from "@prisma/client";
import type { Event } from "../models/Event";

const prisma = new PrismaClient();

export function getEventByCategory(category: string) {
    return prisma.event.findMany({
        where: {
            category: category,
        },
    });
}

export function getEventById(id: number) {
    return prisma.event.findUnique({
        where: {
            id: id,
        },
    });
}

export function getAllEvents() {
    return prisma.event.findMany();
}

export function addEvent(event: Event){
    return prisma.event.create({
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