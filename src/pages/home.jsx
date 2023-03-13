import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Outlet } from "react-router-dom";
import logo from "../img/Logo sin fondo.png";
import Inicio from './inicio';
import Nosotros from './nosotros';

export default function Home() {
    return (
        <main>
            <Navbar bg="light" expand="sm" className="mb-3 navbar">
                <Container fluid>
                    <Navbar.Brand href="#inicio">
                        <img src={logo} alt="Logo Rey de los Andes" className='imgLogo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-sm`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                                Menú
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-start flex-grow-1 pe-3 botones">
                                <Nav.Link href="#inicio">Inicio</Nav.Link>
                                <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                                <Nav.Link href="#action3">Productos</Nav.Link>
                                <Nav.Link href="#action4">Contacto</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <Inicio />
            <Nosotros />

            <Outlet />
        </main>
    );
}