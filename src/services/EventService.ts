import type { Event } from "../models/Event";
import { 
    getAllEvents as allEvents, getEventById as eventById, getEventByCategory as eventByCategory, addEvent as addNewEvent
} from "../repository/EventRepository";

export function getEventByCategory(category: string): Promise<Event[]> {
    return eventByCategory(category);
}

export function getAllEvents(): Promise<Event[]> {
    return allEvents();
}

export function getEventById(id: number): Promise<Event | undefined> {
    return eventById(id);
}

export function addEvent(newEvent: Event): Promise<Event> {
    return addNewEvent(newEvent);
}