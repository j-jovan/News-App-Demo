import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  Col,
  Button
} from 'reactstrap'
import {
  withRouter
} from 'react-router-dom'

import './news-card.scss'

class NewsCard extends Component {
  render() {
    const {
      id,
      title,
      urlToImage
    } = this.props.article


    return (
      <Col sm='12' md={{size: 6, offset: 3}} className='news-card'>
        <Card>
          <CardImg top width='100%' src={urlToImage} alt='Card image cap'/>
          <CardBody>
            <CardTitle>{title}</CardTitle>
          </CardBody>
          <Button className='article-button' onClick={() => {
            this.props.history.push(`/article/${id}`)
          }}>Read article</Button>
        </Card>
      </Col>
    )
  }
}

NewsCard.propTypes = {
  article: PropTypes.object
}

export default withRouter(NewsCard)
