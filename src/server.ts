import express, { Request, Response } from 'express';
const app = express();
const port = 3000;

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
    const event = events.find((event) => event.id === id);
    if (event) {
        res.json(event);
    } else {
        res.status(404).send('Event not found');
    }
});

app.get('/events', (req: Request, res: Response) => {
    if (req.query.category) {
        const category = req.query.category;
        const filteredEvents = events.filter((event) => event.category === category);
        res.json(filteredEvents);
    } else {
        res.json(events);
    }
});

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