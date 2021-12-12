import { Component } from 'react'
import { Navbar, Nav, Container, Badge } from 'react-bootstrap'

export class Navigation extends Component {
  render () {
    return (
      <section id='navigation'>
        <Navbar fixed='top' expand='sm' style={{ fontSize: '20px', fontFamily: 'Readex Pro' }} variant='light'>
          <Container>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/projects'>Projects</Nav.Link>
                <Nav.Link href='/resume'>Resume</Nav.Link>
                <Nav.Link href='/contact'>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    )
  }
}
