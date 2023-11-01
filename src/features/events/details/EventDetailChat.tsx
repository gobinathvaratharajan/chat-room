import { Button, Comment, Form, Header, Segment } from 'semantic-ui-react';

export default function EventDetailChat() {
    return (
        <>
            <Segment textAlign="center" attached="top" inverted color="teal" style={{ border: 'none' }}>
                <Header>Chat about this event</Header>
            </Segment>

            <Segment attached>
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar src="/user.png" />
                        <Comment.Content>
                            <Comment.Author as="a">Elliot Fu</Comment.Author>
                            <Comment.Metadata>
                                <div>Yesterday at 12:30AM</div>
                            </Comment.Metadata>
                            <Comment.Text>
                                <p>This has been very useful for my research. Thanks as well!</p>
                            </Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                        <Comment.Group>
                            <Comment>
                                <Comment.Avatar src="/user.png" />
                                <Comment.Content>
                                    <Comment.Author as="a">Jenny Hess</Comment.Author>
                                    <Comment.Metadata>
                                        <div>Just now</div>
                                    </Comment.Metadata>
                                    <Comment.Text>Elliot you are always so right :)</Comment.Text>
                                    <Comment.Actions>
                                        <Comment.Action>Reply</Comment.Action>
                                    </Comment.Actions>
                                </Comment.Content>
                            </Comment>
                        </Comment.Group>
                    </Comment>
                    <Form reply>
                        <Form.TextArea />
                        <Button content="Add Reply" labelPosition="left" icon="edit" primary />
                    </Form>
                </Comment.Group>
            </Segment>
        </>
    );
}
