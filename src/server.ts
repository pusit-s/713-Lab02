import express, { Request, Response } from 'express';
import { addEvent, getAllEvents, getEventByCategory, getEventById } from "./services/EventService";
import { Event } from './services/EventService';

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

