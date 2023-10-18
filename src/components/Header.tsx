import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/esm/Container';
import { NavLink } from 'react-router-dom'

export default function Header(): JSX.Element{
    return(
        <Navbar sticky='top' data-bs-theme='dark' className='navbar'>
            <Container className="header-label">
                <Navbar.Brand>THE GARAGE</Navbar.Brand>
            </Container>
            <Nav.Item>
                <Nav.Link as={NavLink} to='/'>HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to='/cars'>CARS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to='./signin'>SIGN IN</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to='./register'>SIGN UP</Nav.Link>
            </Nav.Item>
        </Navbar>
    )
}