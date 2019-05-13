import React, {Component, useState, useEffect} from 'react'
import {Container} from 'reactstrap'
import {Spinner} from 'reactstrap'

import './article.scss'

function Article (props) {
  const [articleId, setArticleId] = useState(props.match.params.id)
  const [article, setArticle] = useState()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/news/${articleId}`)
      .then(res => res.json())
      .then(
        (data) => {
          setArticle(data.article)
          setIsLoaded(true)
        },
        (error) => {
          setIsLoaded(true)
        }
      )
  })

  const renderArticle = () => {
    const {
      title,
      content,
      urlToImage,
      author,
      publishedAt
    } = article
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

  return (
    <div className='article'>
      {
        isLoaded ?
          renderArticle() :
          <Spinner type='grow' color='primary'/>
      }
    </div>
  )
}

export default Article
