export type AppEvent = {
    id: string;
    title: string;
    description: string;
    date: string;
    city: string;
    venue: string;
    hostedBy: number;
    hostPhotoURL: string;
    attendees: Attendee[];
};

export type Attendee = {
    id: string
    name: string
    photoURL: string
}
