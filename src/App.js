import React from 'react'
import{Route} from 'react-router-dom'
import Home from './component/Home.js'
import Search from './component/Search.js'
import './App.css'
import * as BooksAPI from './BooksAPI.js'
class BooksApp extends React.Component {
  
   state = {
      books: [],
    };
  
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books: books,
        });
      }
    );
  }
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll()
        .then((books) => {
          this.setState({
            books: books,
          });
        });
    })
  }
  
  render() {
    return (
     
      <div className="app">


        <Route exact path="/" render={() => (
          <Home
             books={this.state.books}
             changeShelf={this.changeShelf}
             
           />
           
        )}/>


        <Route path="/search" render={() => (
          <Search
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}/>


      </div>
       
    );
  }
}

export default BooksApp
