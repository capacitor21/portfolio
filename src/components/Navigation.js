import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-scroll'

export const Navigation = () => {
    return (
        <section id='navigation' className='navigation-section'>
            <Navbar fixed='top' expand='sm'>
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link>
                                <Link activeClass='active' to='title' style={{ color: 'white', textDecoration: 'none', fontSize: 20 }} spy smooth offset={-20} duration={500}>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link activeClass='active' to='about' style={{ color: 'white', textDecoration: 'none', fontSize: 20 }} spy smooth offset={-20} duration={500}>About</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link activeClass='active' to='resume' style={{ color: 'white', textDecoration: 'none', fontSize: 20 }} spy smooth offset={-20} duration={500}>Resume</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link activeClass='active' to='contact' style={{ color: 'white', textDecoration: 'none', fontSize: 20 }} spy smooth offset={-20} duration={500}>Contact</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    )
}