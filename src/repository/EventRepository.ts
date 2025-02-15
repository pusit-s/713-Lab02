import type { Event } from "../models/Event";

const events: Event[] = [
    {
        id: 1,
        category: "Music",
        title: "Jazz Night",
        description: "An evening of smooth jazz",
        location: "New York",
        date: "2021-08-15",
        time: "20:00",
        petsAllowed: true,
        organizer: "Jazz Club",
    },
    {
        id: 2,
        category: "Sports",
        title: "Football Match",
        description: "Local teams competing",
        location: "Los Angeles",
        date: "2021-09-10",
        time: "18:00",
        petsAllowed: false,
        organizer: "Sports League",
    },
    {
        id: 3,
        category: "Theater",
        title: "Broadway Show",
        description: "A popular Broadway musical",
        location: "New York",
        date: "2021-10-05",
        time: "19:30",
        petsAllowed: false,
        organizer: "Broadway Inc.",
    },
    {
        id: 4,
        category: "Technology",
        title: "Tech Conference",
        description: "Annual tech conference",
        location: "San Francisco",
        date: "2021-11-20",
        time: "09:00",
        petsAllowed: false,
        organizer: "Tech World",
    },
    {
        id: 5,
        category: "Food",
        title: "Food Festival",
        description: "A festival of food trucks",
        location: "Austin",
        date: "2021-12-05",
        time: "12:00",
        petsAllowed: true,
        organizer: "Foodies United",
    },
    {
        id: 6,
        category: "Art",
        title: "Art Exhibition",
        description: "Modern art exhibition",
        location: "Chicago",
        date: "2022-01-15",
        time: "10:00",
        petsAllowed: false,
        organizer: "Art Gallery",
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