import React, {Component} from 'react'
import './App.scss'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './components/home/Home'
import About from './components/about/About'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Article from './components/article/Article'
// import Article from './components/article/ArticleHook'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
            <div className="news-body">
              <Route exact path="/" component={Home}/>
              <Route path="/article/:id" component={Article}/>
              <Route path="/about" component={About}/>
            </div>
            <Footer/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
