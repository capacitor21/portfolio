import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai'

export const Contact = () => {
  return (
    <section id='contact' className='contact-section'>
      <Container>
        <h1>Contact Me</h1>
        <Row>
          <Col>
            <Image src={{ AiFillGithub }} fluid />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
