import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import gitHubIcon from '../assets/github.png'
import linkedInIcon from '../assets/linkedIn.gif'
import gmailIcon from '../assets/gmail.png'

export const Contact = () => {
    return (
        <section id='contact' className='contact-section'>
            <Fade bottom duration={1000} delay={250} distance='30px'>
                <Container className='pt-5 align-items-center'>
                    <h1>Contact Me</h1>
                    <Row>
                        <Col sm={4}>
                            <a href='https://github.com/capacitor21'>
                                <Image src={gitHubIcon} style={{backgroundColor: 'transparent', borderColor: 'transparent'}} thumbnail/>
                            </a>
                        </Col>
                        <Col sm={4}>
                            <a href='https://www.linkedin.com/in/michael-dedreu/'>
                                <Image src={linkedInIcon} style={{backgroundColor: 'transparent', borderColor: 'transparent'}} thumbnail/>
                            </a>
                        </Col>
                        <Col sm={4}>
                            <a href='mailto:mdedreu21@gmail.com'>
                                <Image src={gmailIcon} style={{backgroundColor: 'transparent', borderColor: 'transparent'}} thumbnail/>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </Fade>
        </section>
    )
}
