import { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../form/EventForm';
import { sampleData } from '../../../app/api/sampleData';
import { AppEvent } from '../../../app/types/event';

type Props = {
    formOpen: boolean;
    setFormOpen: (val: boolean) => void;
    selectEvent: (event: AppEvent | null) => void;
    selectedEvent: AppEvent | null;
};

export default function EventDashboard({ formOpen, setFormOpen, selectEvent, selectedEvent }: Props) {
    const [events, setEvents] = useState<AppEvent[]>([]);

    useEffect(() => {
        setEvents(sampleData);
    }, []);

    function addEvent(event: AppEvent) {
        setEvents(prevState => [...prevState, event]);
        // In the existing array the new event will be added
    }

    function updateEvent(updatedEvent: AppEvent) {
        setEvents(events.map(e => (e.id === updatedEvent.id ? updatedEvent : e)));
        selectEvent(null);
        setFormOpen(false);
    }

    function deleteEvent(eventId: string) {
        setEvents(events.filter(e => e.id !== eventId));
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} selectEvent={selectEvent} deleteEvent={deleteEvent} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && (
                    <EventForm
                        updateEvent={updateEvent}
                        setFormOpen={setFormOpen}
                        addEvent={addEvent}
                        selectedEvent={selectedEvent}
                        key={selectedEvent ? selectedEvent.id : 'create'}
                    />
                )}
            </Grid.Column>
        </Grid>
    );
}
