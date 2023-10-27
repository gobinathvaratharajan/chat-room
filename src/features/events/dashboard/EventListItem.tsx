import { Button, Icon, Image, Item, ItemGroup, List, Segment, SegmentGroup } from 'semantic-ui-react';
import EventListItemAttendee from './EventListItemAttendee';
import { AppEvent } from '../../../app/types/event';
import { Link } from 'react-router-dom';

type Props = {
    event: AppEvent;
};

export default function EventListItem({ event }: Props) {
    return (
        <SegmentGroup>
            <Segment>
                <ItemGroup>
                    <Item>
                        <Image size="tiny" circular src={event.hostPhotoURL || './user.png'} />
                        <Item.Content>
                            <Item.Header content={event.title} />
                            <Item.Description>Hosted by {event.hostedBy}</Item.Description>
                        </Item.Content>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock" /> {event.date}
                    <Icon name="marker" /> {event.venue}
                </span>
            </Segment>
            {event.attendees.length !== 0 && (
                <Segment secondary>
                    <List horizontal>
                        {event.attendees.map((attendee: any) => (
                            <EventListItemAttendee key={attendee.id} attendee={attendee} />
                        ))}
                    </List>
                </Segment>
            )}
            <Segment clearing>
                <span>{event.description}</span>
                <Button icon color="red" floated="right" content="Delete" />
                <Button as={Link} to={`/events/${event.id}`} icon color="teal" floated="right" content="View" />
            </Segment>
        </SegmentGroup>
    );
}
