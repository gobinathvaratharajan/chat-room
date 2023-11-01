import { Grid } from 'semantic-ui-react';
import EventDetailSidebar from './EventDetailSidebar';
import EventDetailHeader from './EventDetailHeader';
import EventDetailInfo from './EventDetailInfo';
import EventDetailChat from './EventDetailChat';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../app/store/store';

export default function EventDetailPage() {
    const { id } = useParams();
    const event = useAppSelector(state => state.events.events.find(e => e.id === id));

    if (!event) return <h2>Event not found</h2>;
    return (
        <>
            <Grid>
                <Grid.Column width={10}>
                    <EventDetailHeader event={event} />
                    <EventDetailInfo event={event} />
                    <EventDetailChat />
                </Grid.Column>
                <Grid.Column width={6}>
                    <EventDetailSidebar />
                </Grid.Column>
            </Grid>
        </>
    );
}
