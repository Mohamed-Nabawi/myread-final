import React from 'react'
import PropTypes from 'prop-types'
import ChangeShelf from './ChangeShelf.js'
class Book extends React.Component{
    render(){
        return(
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.url}")`}}>

                </div>
                <ChangeShelf
                  book={this.props.book}
                  currentShelf={this.props.currentShelf}
                  changeShelf={this.props.changeShelf}
                />
               
              </div>
              <div className="book-title">{this.props.title}</div>
              <div className="book-authors">{this.props.author}</div>
            </div>
         

        )
    }
}
Book.propTypes = {
  currentShelf: PropTypes.string,
  changeShelf: PropTypes.func,
  title: PropTypes.string,
};
export default Book