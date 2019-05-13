import React, {Component} from 'react'
import {
  Container,
  InputGroup,
  InputGroupAddon,
  Input
} from 'reactstrap'

import NewsCard from '../news-card/NewsCard'
import {Spinner} from 'reactstrap'

import './home.scss'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      news: [],
      filteredNews: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/news`)
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            news: data.results
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

  renderNews() {
    const {
      news,
      filteredNews
    } = this.state

    const data = filteredNews.length ? filteredNews : news

    return data.map((article, index) => <NewsCard key={index} article={article}/>)
  }

  filterData(e) {
    const filterInput = e.target.value.toLowerCase()
    const {
      news
    } = this.state
    this.setState({filteredNews: filterInput ? news.filter((article) => article.title.toLowerCase().includes(filterInput)) : news})
  }

  renderFilter() {
    return (
      <div className='filter'>
        <InputGroup size='lg'>
          <InputGroupAddon addonType='prepend'></InputGroupAddon>
          <Input onChange={this.filterData.bind(this)}/>
        </InputGroup>
      </div>
    )
  }

  render() {
    return (
      <div className='home'>
        <Container>
          {this.renderFilter()}
          {
            this.state.isLoaded ? this.renderNews() : <Spinner type='grow' color='primary'/>
          }
        </Container>
      </div>
    )
  }
}

export default Home
