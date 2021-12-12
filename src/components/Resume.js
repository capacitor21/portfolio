import React from 'react'
import { Container, Image } from 'react-bootstrap'
import resume from '../assets/resume.jpg'

export const Resume = () => {
  return (
    <section id='resume' className='resume-section'>
      <Container>
        <Image src={{ resume }} />
      </Container>
    </section>
  )
}
