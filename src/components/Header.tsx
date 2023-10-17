import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/esm/Container';
import { NavLink } from 'react-router-dom'

export default function Header(): JSX.Element{
    return(
        <Navbar sticky='top' data-bs-theme='dark' className='header'>
            <Container className="header-label">
                <Navbar.Brand>GARAGE</Navbar.Brand>
            </Container>
            <Nav.Item>
                <Nav.Link as={NavLink} to='/'>HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to='/'>CARS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to='../pages/SignIn'>SIGN IN</Nav.Link>
            </Nav.Item>
        </Navbar>
    )
}