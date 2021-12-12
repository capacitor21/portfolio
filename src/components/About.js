import React from 'react'
import { Row, Col, Container, Image, Card } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import profilePic from '../assets/profilePic.jpg'

export const About = () => {
    return (
        <section id='about' className='about-section'>
            <Fade bottom duration={1000} delay={250} distance='30px'>
                <Container className='pt-5 align-items-center' style={{ backgroundColor: 'transparent' }}>
                    <Row>
                        <Col md={8}>
                            <Card bg='dark' style={{ borderRadius: '2%', padding: '1%'}}>
                                <Card.Body>
                                    <h1>About me</h1>
                                    <p>Hi, my name is Michael! I&apos;m currently employed as Backend Web Developer. I graduated from Rutgers University with a B.S. in Computer Science Cum Laude in May 2021.</p>
                                    <p>My professional experience consists of developing APIs backed by AWS and a bit a UI work in the pharmaceuticals domain. Some of the services I work on include claims processing, patient hub services, electronic prior authorization, and copay services.</p>
                                    <p>Outside of work I have a keen interest in Data Science and Artifical Intelligence. What excites me about Data Science is the endless amounts of useful information that is just waiting to be discovered.
                                        Some projects I have a worked on include sentiment analysis on random batches tweets, regression models on data from the Strava Api,
                                        and a web scraping project that continously scrapes headlines and runs analysis on the overall sentiment of the headlines and what the top keywords were.
                                    </p>
                                    <p>In my free time I enjoy playing guitar, hiking, mountain biking, and snowboarding.</p>
                                    <h2>Skills</h2>
                                    <ul>
                                        <li>Leadership - Both in school and work projects, I have consistently taken on a leadership role.</li>
                                        <li>Problem Solving - Problem solving is one of my biggest strengths and something I throughly enjoy. Nothing is more rewarding than seeing the process from a vague problem to a working solution.</li>
                                    </ul>
                                    <h2>Technologies</h2>
                                    <ul>
                                        <li>Frameworks</li>
                                        <ul>
                                            <li>Node.js</li>
                                            <li>.NET</li>
                                        </ul>
                                        <li>AWS: ApiGateway, DynamoDB, Lambda, StepFunction, S3, Kinesis</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Image src={profilePic} fluid thumbnail />
                        </Col>
                    </Row>
                </Container>
            </Fade>
        </section>
    )
}
