import React, {Component} from 'react'
import {Jumbotron} from 'reactstrap'

import './about.scss'

class About extends Component {
  render() {
    return (
      <div className='about'>
        <Jumbotron>
          <h1 className='display-3'>Hi!</h1>
          <p className='lead'>This is a simple News web app, showing you the best and the latest.</p>
          <p className='lead'>Stay tuned!</p>
        </Jumbotron>
      </div>
    )
  }
}

export default About
