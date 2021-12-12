import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-scroll'

export const Navigation = () => {
    return (
      <section id='navigation'>
        <Navbar fixed='top' expand='sm' style={{ fontSize: '20px', fontFamily: 'Readex Pro' }} variant='light'>
          <Container>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link>
                    <Link activeClass='active' to='title' style={{textDecoration: 'none'}} spy={true} smooth={true} offset={-20} duration={500}>Home</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link activeClass='active' to='about' style={{textDecoration: 'none'}} spy={true} smooth={true} offset={-20} duration={500}>About</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link activeClass='active' to='projects' style={{textDecoration: 'none'}} spy={true} smooth={true} offset={-20} duration={500}>Projects</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link activeClass='active' to='resume' style={{textDecoration: 'none'}} spy={true} smooth={true} offset={-20} duration={500}>Resume</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link activeClass='active' to='contact' style={{textDecoration: 'none'}} spy={true} smooth={true} offset={-20} duration={500}>Contact</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    )
}
