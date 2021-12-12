import { Component } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { projects } from '../data/projects'

export class Projects extends Component {
  render () {
    return (
      <Container fluid='lg'>
        <Row>
          <Col><h1>Apps I've Built</h1></Col>
        </Row>
        <Row>
          {projects.map((project) => (
            <Col lg={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={project.image} />
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
    )
  }
}
