import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Fade } from 'react-reveal'

export const Home = () => {
  return (
    <section id='title' className='home-section'>
      <Container style={{ height: '100vh' }} className='align-items-center'>
        <Fade clear duration={2000} delay={500} distance='30px'>
          <Row className='pt-5 centerRow'>
            <Col>
              <h1 className='title'>Michael DeDreu<br />Software Engineer</h1>
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  )
}
