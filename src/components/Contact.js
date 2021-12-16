import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import gitHubIcon from '../assets/github.png'
import linkedInIcon from '../assets/linkedIn.gif'
import gmailIcon from '../assets/gmail.png'
import '../App.css'

export const Contact = () => {
    return (
        <section id='contact'>
            <Fade bottom duration={1000} delay={250} distance='30px'>
                <Container className='mx-auto mt-4'>
                    <h1>Contact Me</h1>
                    <Row>
                        <Col>
                            <a href='https://github.com/capacitor21'>
                                <Image src={gitHubIcon} style={{backgroundColor: 'transparent', borderColor: 'transparent', height: '70%'}} thumbnail/>
                            </a>
                        </Col>
                        <Col>
                            <a href='https://www.linkedin.com/in/michael-dedreu/'>
                                <Image src={linkedInIcon} style={{backgroundColor: 'transparent', borderColor: 'transparent', height: '70%'}} thumbnail/>
                            </a>
                        </Col>
                        <Col>
                            <a href='mailto:mdedreu21@gmail.com'>
                                <Image src={gmailIcon} style={{backgroundColor: 'transparent', borderColor: 'transparent', height: '70%'}} thumbnail/>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </Fade>
        </section>
    )
}
