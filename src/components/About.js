import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import profilePic from '../assets/profilePic.jpg'

export const About = () => {
  return (
    <section id='about' className='about-section'>
      <Container className='pt-5 background-image' style={{ backgroundColor: 'transparent' }}>
        <Row>
          <Col md={8}>
            <h1>About me</h1>
            <p>Hi, my name is Michael! I'm currently employed as Backend Web Developer. I graduated from Rutgers University with a B.S. in Computer Science Cum Laude in May 2021.</p>
            <p>My experience consists of developing API's backed by AWS and a bit a UI work in the pharmaceuticals domain. Some of the services I work on include claims processing, patient hub services, electronic prior authorization, and copay services.</p>
            <p>Outside of work I have a keen interest in Data Science and Artifical Intelligence. What excites me about Data Science is the endless amounts of useful information that is just waiting to be discovered.
              Some projects I have a worked on include sentiment analysis on random batches tweets, regression models on data from the Strava Api,
              and a web scraping project that continously scrapes headlines from multiple news sources daily, and runs a daily job to average the overall sentiment of the headlines of the day and what the most prevalent keywords were.
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
          </Col>
          <Col md={4}>
            <Image src={profilePic} fluid thumbnail />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
