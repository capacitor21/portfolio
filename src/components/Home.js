import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import avatar from '../assets/avatar.png'

export const Home = () => {
    return (
        <section id='title' className='home-section'>
            <Container className='my-5 min-vh-100'>
                <Fade top duration={2000} delay={500} distance='30px' style={{ height: '100vh'}}>
                    <Row className='pt-5 centerRow flex-grow-1'>
                        <Col md={8}>
                            <h1 className='title'>Michael DeDreu<br/>Software Engineer</h1>
                        </Col>
                        <Col md={4}>
                            <Image src={avatar} style={{ backgroundColor: 'transparent', borderColor: 'transparent'}} thumbnail/>
                        </Col>
                    </Row>
                </Fade>
            </Container>
        </section>
    )
}
