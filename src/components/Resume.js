import React from 'react'
import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import resumeImage from '../assets/resume.jpg'
//import resumePdf from '../assets/Michael_DeDreu_Resume.pdf'

export const Resume = () => {
    return (
        <section id='resume' className='resume-section'>
            <Fade bottom duration={1000} delay={250} distance='30px'>
                <Container className='align-items-center'>
                    <Row>
                        <Col md={9}>
                            <Card bg='dark' style={{ borderRadius: '2%', padding: '2%'}}>
                                <Card.Body>
                                    <h1 style={{textAlign: 'left'}}>Resume</h1>
                                    <a href='../assets/Michael_DeDreu_Resume.pdf' target = "_blank">
                                        <Image src={resumeImage} thumbnail />
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fade>
        </section>
    )
}
