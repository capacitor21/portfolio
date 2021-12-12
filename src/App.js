import { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { Navigation } from './components/Navigation'

export default class App extends Component {
  render () {
    return (
      <Router>
        <Navigation />
        <Container className='pt-5 background-image' fluid>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </Container>
      </Router>
    )
  }
}
