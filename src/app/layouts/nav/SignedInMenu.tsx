import { Link, useNavigate } from 'react-router-dom';
import { Dropdown, Image, Menu } from 'semantic-ui-react';

type Props = {
    setAuth: (value: boolean) => void;
};

export default function SignedInMenu({ setAuth }: Props) {
    const navigate = useNavigate();

    function handleSignOut() {
        setAuth(false);
        navigate('/');
    }
    return (
        <Menu.Item position="right">
            <Image avatar spaced="right" src="./user.png" alt="avatar" />
            <Dropdown pointing="top left" text="Bob">
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/createForm" text="Create Event" icon="plus" />
                    <Dropdown.Item text="My Profile" icon="user" />
                    <Dropdown.Item onClick={handleSignOut} text="Sign Out" icon="power" />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    );
}
