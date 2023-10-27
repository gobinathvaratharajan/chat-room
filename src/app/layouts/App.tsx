import { Container } from 'semantic-ui-react';
import Navbar from './nav/Navbar';
import './styles.css';
import { Outlet, useLocation } from 'react-router-dom';
import Homepage from '../../features/home/Homepage';

function App() {
    const location = useLocation();
    return (
        <>
            {location.pathname === '/' ? (
                <Homepage />
            ) : (
                <>
                    <Navbar />
                    <h1>Chat rooms</h1>
                    <Container className="main-container">
                        <Outlet />
                    </Container>
                </>
            )}
        </>
    );
}

export default App;
