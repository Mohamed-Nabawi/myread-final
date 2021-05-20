import React from 'react'
import Book from './Book'
class Shelf extends React.Component{
    render(){
      let booklist = this.props.books
      .filter((book) => book.shelf === this.props.id)
      .map((book) =>
        <li key={book.id}>
          <Book
            book={book}
            url={book.imageLinks ? book.imageLinks.thumbnail : ''}
            title={book.title}
            author={book.authors ? book.authors : ''}
            currentShelf={book.shelf ? book.shelf : ''}
            changeShelf={this.props.changeShelf}
          />
        </li>);
        return(   
        <div>
            <div className="bookshelf" key={this.props.id}>
      <h2 className="bookshelf-title">{this.props.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {booklist}
    
                  </ol>
                </div>
              </div>
            </div>
        )
    }
}
export default Shelf