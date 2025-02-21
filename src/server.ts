import express, { Request, Response } from 'express';
import { addEvent, getAllEvents, getEventByCategory, getEventById } from "./services/EventService";
import { Event } from "./models/Event";
import multer from 'multer';
import { uploadFile } from './services/UploadFileService';

const app = express();
const port = 3000;
const upload = multer({storage: multer.memoryStorage()});

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

app.get('/events', async(req: Request, res: Response) => {
    if (req.query.category) {
        const category = req.query.category as string;
        const filteredEvents = await getEventByCategory(category as string);
        res.json(filteredEvents);
    } else {
        res.json(await getAllEvents());
    }
});

app.get('/events/:id', async(req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const event = await getEventById(id);
    if (event) {
        res.json(event);
    } else {
        res.status(404).send('Event not found');
    }
});

app.post('/events', async(req: Request, res: Response) => {
    const newEvent: Event = req.body;
    await addEvent(newEvent)
    res.json(newEvent)
});

app.post('/upload', upload.single('file'), async(req: Request, res: Response) => {
    try {
        const file = req.file;
        if (!file) {
            res.status(400).send('No file uploaded');
            return;
        }

        const bucket = 'images';
        const filePath = `uploads/${file.originalname}`;

        await uploadFile(bucket, filePath, file);

        res.status(200).send('File uploaded');
    } catch (error) {
        res.status(500).send('Error uploading file');
    }
});