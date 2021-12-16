import React from 'react'
import { Row, Col, Container, Image, Card } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import profilePic from '../assets/profilePic.jpg'

export const About = () => {
    return (
        <section id='about' className='about-section'>
            <Fade bottom duration={1000} delay={250} distance='30px'>
                <Container className='mx-auto min-vh-100 my-2' style={{ backgroundColor: 'transparent' }}>
                    <Row>
                        <Col md={8}>
                            <Card bg='dark' style={{ borderRadius: '2%', padding: '1%'}}>
                                <Card.Body>
                                    <h1>About me</h1>
                                    <p>Hi, my name is Michael! I&apos;m currently employed as Backend Web Developer and graduated from Rutgers University with a B.S. in Computer Science Cum Laude in May 2021.</p>
                                    <p>My professional experience thus far consists of developing APIs backed by AWS and a bit of UI work in the pharmaceuticals domain. Some of the services I work on include claims processing, patient hub services, electronic prior authorization, and copay services.</p>
                                    <p>Outside of work I have a keen interest in Data Science and Artifical Intelligence. Some projects I have a worked on include a web scraping project that runs sentiment analysis on daily news headlines and a project to find trends in exercise data from the Strava API.</p>
                                    <p>In my free time I enjoy playing guitar, hiking, mountain biking, and snowboarding.</p>
                                    <h2>Accomplishments</h2>
                                    <ul>
                                        <li>Piloted the design and implementation of a migration job that injests over 30,000 insurance plans into our system via a file drop.</li>
                                        <li>Contributed significantly to the design and implementation of an external template creator/fax distributor that sends benefit verification forms to patients via a Salesforce UI trigger.</li>
                                        <li>Migrated existing projects infrastructure into AWS Cloudformation templates to speed up our CI/CD process and simplify infrastructure configurations.</li>
                                        <li>Contributed significantly to the migration and bi-directional sync of data between our legacy CMS and Salesforce.</li>
                                    </ul>
                                    <h2>Skills</h2>
                                    <ul>
                                        <li>Leadership - Both in school and work projects, I have naturally taken on a leader role and always go the extra mile to support my team members with any help they may need.</li>
                                        <li>Problem Solving - This is one of my greatest strengths and something I throughly enjoy. It is extremely rewarding to see a set of requirements that once seemed vague manifest into a working solution.</li>
                                    </ul>
                                    <h2>Technologies</h2>
                                    <ul>
                                        <li>Languages: Javascript, Python, Java, C#, SQL, HTML, CSS</li>
                                        <li>Frameworks</li>
                                        <ul>
                                            <li>Backend: Node.js, .NET</li>
                                            <li>Frontend: React</li>
                                        </ul>
                                        <li>Tools/Services</li>
                                        <ul>
                                            <li>AWS APIGateway, CloudFormation, DynamoDB, Lambda, StepFunctions, S3, Kinesis</li>
                                            <li>Git</li>
                                        </ul> 
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
