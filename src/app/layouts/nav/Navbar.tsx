import { NavLink } from 'react-router-dom';
import { Button, Container, Menu, MenuItem } from 'semantic-ui-react';
import SignedOutButtons from './SignedOutButtons';
import SignedInMenu from './SignedInMenu';
import { useState } from 'react';

export default function Navbar() {
    const [auth, setAuth] = useState(false);

    return (
        <Menu inverted={true} fixed="top">
            <Container>
                <MenuItem header as={NavLink} to="/">
                    <img src="/logo.png" alt="logo" />
                    Chat rooms
                </MenuItem>
                <MenuItem name="Home" as={NavLink} to="/events" />
                <MenuItem>
                    <Button
                        floated="right"
                        positive={true}
                        inverted={true}
                        content="Create Form"
                        as={NavLink}
                        to="/createForm"
                    />
                </MenuItem>
                {auth ? <SignedInMenu setAuth={setAuth} /> : <SignedOutButtons setAuth={setAuth} />}
            </Container>
        </Menu>
    );
}
