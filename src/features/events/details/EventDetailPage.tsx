import { Grid } from 'semantic-ui-react';
import EventDetailSidebar from './EventDetailSidebar';
import EventDetailHeader from './EventDetailHeader';
import EventDetailInfo from './EventDetailInfo';
import EventDetailChat from './EventDetailChat';

export default function EventDetailPage() {
    return (
        <>
            <Grid>
                <Grid.Column width={10}>
                    <EventDetailHeader />
                    <EventDetailInfo />
                    <EventDetailChat />
                </Grid.Column>
                <Grid.Column width={6}>
                    <EventDetailSidebar />
                </Grid.Column>
            </Grid>
        </>
    );
}
