import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { projects } from '../data/projects'

export const Projects = () => {
  return (
    <section id='projects' className='projects-section'>
      <Container fluid='lg'>
        <Row>
          <Col><h1>Projects</h1></Col>
        </Row>
        <Row>
          {projects.map((project) => (
            <Col lg={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
          )}
        </Row>
      </Container>
    </section>
  )
}
