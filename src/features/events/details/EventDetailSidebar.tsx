import { Button, Item, Segment } from 'semantic-ui-react';

export default function EventDetailSidebar() {
    return (
        <>
            <Segment textAlign="center" style={{ border: 'none' }} attached="top" secondary inverted color="teal">
                2 People Going
            </Segment>
            <Segment attached>
                <Item.Group relaxed divided>
                    <Item style={{ position: 'relative' }}>
                        <Item.Image size="mini" src="/user.png" circular />
                        <Item.Content verticalAlign="middle">
                            <Item.Header as="h3">
                                <span>Tom</span>
                            </Item.Header>
                            <Button
                                style={{ position: 'absolute', right: '0' }}
                                size="tiny"
                                basic
                                color="green"
                                content="Follow"
                            />
                        </Item.Content>
                    </Item>
                    <Item style={{ position: 'relative' }}>
                        <Item.Image size="mini" src="/user.png" circular />
                        <Item.Content verticalAlign="middle">
                            <Item.Header as="h3">
                                <span>Bob</span>
                            </Item.Header>
                            <Button
                                style={{ position: 'absolute', bottom: '0', right: '0' }}
                                size="tiny"
                                basic
                                color="green"
                                content="Follow"
                            />
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
        </>
    );
}
