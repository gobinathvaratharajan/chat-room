import { Link } from 'react-router-dom';
import { Button, Container, Header, Icon, Image, Segment } from 'semantic-ui-react';

export default function Homepage() {
    return (
        <Segment inverted textAlign="center" vertical className="homepage-container">
            <Container>
                <Header as="h1" inverted>
                    <Image src="./logo.png" size="massive" alt="logo" style={{ marginBottom: 12 }} />
                    Chat rooms
                </Header>
                <Button as={Link} size="huge" inverted to="/events">
                    Explore Now
                    <Icon name="caret right" inverted />
                </Button>
            </Container>
        </Segment>
    );
}
