import { Component } from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import profilePic from '../assets/profilePic.jpg'

export class About extends Component {
  render () {
    return (
      <section id='about'>
        <Container className='pt-5'>
          <Row>
            <Col md={8}>
              <h1>About me</h1>
              <p>Hi, my name is Michael! I'm currently work as a backend web developer. I graduated from Rutgers University with a Bachelors of Science in Computer Science Cum Laude in May 2021.
              </p>
            </Col>
            <Col md={4}>
              <Image src={profilePic} fluid thumbnail />
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
