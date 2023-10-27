import { Button, MenuItem } from 'semantic-ui-react';

type Props = {
    setAuth: (value: boolean) => void;
};

export default function SignedOutButtons({ setAuth }: Props) {
    return (
        <MenuItem position="right">
            <Button basic={true} inverted={true} content="Login" onClick={() => setAuth(true)} />
            <Button basic={true} inverted={true} content="Register" style={{ marginLeft: '0.5em' }} />
        </MenuItem>
    );
}
