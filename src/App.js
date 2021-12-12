import { Component } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { Home } from './components/Home'
import { Navigation } from './components/Navigation'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Resume } from './components/Resume'

const App = () => {
  return (
    <div className='App'>
      <Container className='pt-5' fluid>
        <Navigation/>
        <Home/>
        <About/>
        <Resume/>
        <Contact/>
      </Container>
    </div>
  )
}

export default App;
