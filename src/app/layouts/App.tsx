import { useState } from 'react'
import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/events/dashboard/EventDashboard'
import Navbar from './nav/Navbar'
import './styles.css'

function App() {
    const [formOpen, setFormOpen] = useState(false)
    return (
      <>
        <Navbar setFormOpen={setFormOpen} />
            <h1>Chat rooms</h1>
            <Container className='main-container'>
                <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
            </Container>
      </>
  )
}

export default App
