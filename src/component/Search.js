import React from 'react'
import Book from './Book.js'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI.js'


class Search extends React.Component{
  constructor() {
    super();
    this.state = {
      query: '',
      results: [],
    };
  }
  updateSearch = (query) => {
    if (query === '' || query === undefined) {
      this.setState({
        query: '',
        results: [],
      });
    } else {
      this.setState({
        query: query,
      });
      BooksAPI.search(query)
      .then((results) => {
        if (results === undefined) {
          this.setState({
            results: [],
          });
        } else {
          this.setState({
            results: results,
          });
        }
      })
      .catch(error => console.log(error));
      console.log(query)
  }
}
returnShelf = (book, books) => {
  let foundBook = books.filter(b => b.id === book.id);

  if (foundBook.length !== 0) {
    return foundBook[0].shelf;
  } else {
    return 'none';
  }
}
    render(){
        return( <div className="search-books">
        <div className="search-books-bar">
        <Link to="/" className="close-search">
            Close
          </Link>
          
          <div className="search-books-input-wrapper">
          <input
              type="text"
              placeholder="Search by title or author"
              minLength={2}
              debouncetimeout={200}
              value={this.query}
              onChange={e => this.updateSearch(e.target.value)}
            />
           
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.results.length > 0 &&
              this.state.results.map((book) =>
                  <li key={book.id}>
                    <Book
                      book={book}
                      url={book.imageLinks ? book.imageLinks.thumbnail : null}
                      title={book.title}
                      author={book.authors ? book.authors : ''}
                      currentShelf={this.returnShelf(book, this.props.books)}
                      changeShelf={this.props.changeShelf}
                    />
                  </li>
              )
            }
          </ol>
        </div>
      </div>

        )
    }
}
export default Search
