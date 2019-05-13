import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'

import './footer.scss'

class Footer extends Component {
  returnYear() {
    const date = new Date()
    return date.getFullYear()
  }

  render() {
    return (
      <div className='footer'>
        <Container>
          <p>Copyright {this.returnYear()}</p>
        </Container>
      </div>
    )
  }
}

export default Footer
