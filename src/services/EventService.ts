import type { Event } from "../models/Event";
import * as repo from "../repository/EventRepositoryPrisma";

export function getEventByCategory(category: string) {
    return repo.getEventByCategory(category);
}

export function getAllEvents() {
    return repo.getAllEventsWithOrganizer()
}

export function getEventById(id: number) {
    return repo.getEventByIdWithOrganizer(id);
}

export function addEvent(newEvent: Event) {
    return repo.addEvent(newEvent);
}