import React, {Component} from 'react'
import {Container} from 'reactstrap'
import {Spinner} from 'reactstrap'

import './article.scss'

class Article extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articleId: this.props.match.params.id,
      article: null,
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/news/${this.state.articleId}`)
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            article: data.article
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }


  renderArticle() {
    const {
      title,
      content,
      urlToImage,
      author,
      publishedAt

    } = this.state.article
    return (
      <Container>
        <div className='image-container'>
          <img src={urlToImage} alt='Card image cap'/>
        </div>
        <div className='article-text'>
          <h3>{title}</h3>
          <p>{content}</p>
          <p><span>Author:</span> {author}</p>
          <p><span>Published at:</span> {publishedAt}</p>
        </div>
      </Container>
    )
  }

  render() {
    return (
      <div className='article'>
        {
          this.state.isLoaded ?
            this.renderArticle() :
            <Spinner type='grow' color='primary'/>
        }
      </div>
    )
  }
}

export default Article
