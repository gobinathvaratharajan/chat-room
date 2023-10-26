import { Button, Container, Menu, MenuItem } from 'semantic-ui-react';

type Props = {
    setFormOpen: (val: boolean) => void;
};

export default function Navbar({ setFormOpen }: Props) {
    return (
        <Menu inverted={true} fixed="top">
            <Container>
                <MenuItem header>
                    <img src="/logo.png" alt="logo" />
                    Chat rooms
                </MenuItem>
                <MenuItem name="Home" />
                <MenuItem>
                    <Button
                        onClick={() => setFormOpen(true)}
                        floated="right"
                        positive={true}
                        inverted={true}
                        content="Create event"
                    />
                </MenuItem>
                <MenuItem position="right">
                    <Button basic={true} inverted={true} content="Login" />
                    <Button basic={true} inverted={true} content="Register" style={{ marginLeft: '0.5em' }} />
                </MenuItem>
            </Container>
        </Menu>
    );
}
