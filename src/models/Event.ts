import { Organizer } from "./Organizer";
import { Participant } from "./Participants";
export interface Event {
    id?: number;
    category?: string;
    title?: string;
    description?: string;
    location?: string;
    date?: string;
    time?: string;
    petsAllowed?: boolean;
    organizerId?: number | null;
    organizer?: Organizer | null;
    participants?: Participant[];
}