import express, { Request, Response } from 'express';
import { get } from 'http';
import add from './function';
const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

app.get('/test', (req: Request, res: Response) => {
    const id = req.query.id;
    const output = `id: ${id}`;
    res.send(output);
});

app.get('/events/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const event = getEventById(id);
    if (event) {
        res.json(event);
    } else {
        res.status(404).send('Event not found');
    }
});


app.get('/events', (req: Request, res: Response) => {
    if (req.query.category) {
        const category = req.query.category as string;
        const filteredEvents = getEventByCategory(category as string);
        res.json(filteredEvents);
    } else {
        res.json(getAllEvents);
    }
});

app.post('/events', (req: Request, res: Response) => {
    const newEvent: Event = req.body;
    addEvent(newEvent)
    res.json(newEvent)
});

function getEventByCategory(category: string): Event[] {
    const filteredEvents = events.filter((event) => event.category === category);
    return filteredEvents
}

function getAllEvents(): Event[] {
    return events
}

function getEventById(id: number): Event | undefined {
    return events.find((event) => event.id === id);
}

function addEvent(newEvent: Event): Event {
    newEvent.id = events.length + 1;
    events.push(newEvent);
    return newEvent;
}

interface Event {
    id: number;
    category: string;
    title: string;
    description: string;
    location: string;
    date: string;
    time: string;
    petsAllowed: boolean;
    organizer: string;
}

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