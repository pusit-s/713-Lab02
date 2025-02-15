import type { Event } from "../models/Event";

const events: Event[] = [
    {
        id: 1,
        category: "Music",
        title: "Concert",
        description: "A live concert",
        location: "London",
        date: "2021-07-01",
        time: "19:00",
        petsAllowed: false,
        organizer: "Live Nation",

    },
    {
        id: 2,
        category: "Music",
        title: "Concert",
        description: "A live concert",
        location: "London",
        date: "2021-07-01",
        time: "19:00",
        petsAllowed: false,
        organizer: "Live Nation",

    },
    {
        id: 3,
        category: "Music",
        title: "Concert",
        description: "A live concert",
        location: "London",
        date: "2021-07-01",
        time: "19:00",
        petsAllowed: false,
        organizer: "Live Nation",

    },
    {
        id: 4,
        category: "Music",
        title: "Concert",
        description: "A live concert",
        location: "London",
        date: "2021-07-01",
        time: "19:00",
        petsAllowed: false,
        organizer: "Live Nation",

    },
    {
        id: 5,
        category: "Music",
        title: "Concert",
        description: "A live concert",
        location: "London",
        date: "2021-07-01",
        time: "19:00",
        petsAllowed: false,
        organizer: "Live Nation",

    },
    {
        id: 6,
        category: "Sports",
        title: "Concert",
        description: "A live concert",
        location: "London",
        date: "2021-07-01",
        time: "19:00",
        petsAllowed: false,
        organizer: "Live Nation",
    },
];

export function getEventByCategory(category: string): Promise<Event[]> {
    const filteredEvents = events.filter((event) => event.category === category);
    return Promise.resolve(filteredEvents)
}

export function getAllEvents(): Promise<Event[]> {
    return Promise.resolve(events)
}

export function getEventById(id: number): Promise<Event | undefined> {
    return Promise.resolve(events.find((event) => event.id === id));
}

export function addEvent(newEvent: Event): Promise<Event> {
    newEvent.id = events.length + 1;
    events.push(newEvent);
    return Promise.resolve(newEvent);
}