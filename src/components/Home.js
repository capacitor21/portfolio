import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Fade } from 'react-reveal'
// import { Navigation } from './Navigation'
import { About } from './About'
// import { Projects } from './Projects'
// import resume from '../assets/resume.pdf'

export class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isDesktop: false,
      isMobile: false
    }
  }

  componentDidMount () {
    if (window.innerWidth > 769) {
      this.setState({ isDesktop: true })
      this.setState({ isMobile: false })
    } else {
      this.setState({ isMobile: true })
      this.setState({ isDesktop: false })
    }
  }

  render () {
    return (
      <section id='title'>
        <Container>
          <Fade clear duration={1000} delay={500} distance='30px'>
            <Row className='pt-5'>
              <Col>
                <h1 className='title'>Michael DeDreu - Software Engineer</h1>
              </Col>
            </Row>
            <About />
          </Fade>
        </Container>

      </section>
    )
  }
}

/**
 * <Projects/>
                    <Image src={resume} fluid />
 */

/**
 * <Fade left={this.state.isDesktop} bottom={this.state.isMobile} duration={1000} delay={500} distance="30px">
                    <p className="hero-cta">
                        <span className="cta-btn cta-btn--hero">
                            <Link to="about" smooth duration={1000}>
                                {cta || 'Learn more'}
                            </Link>
                        </span>
                    </p>
                    </Fade>
 */
