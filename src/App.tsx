import { BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Header from "./components/Header";
import Dashboard from './components/Dashboard';

function App() {
  return(
    <Container >
      <BrowserRouter>
        <Header />
        <div className='main'>
        <Dashboard />
        </div>
      </BrowserRouter>
    </Container>
  )
}
export default App;
