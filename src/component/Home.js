import React from 'react'
import Shelf from './Shelf.js';
import{Link} from 'react-router-dom'
import PropTypes from 'prop-types';


class Home extends React.Component{
    
    
    render(){
        return( 
        <div className="list-books">
           <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
      <div className="list-books-content" >
     
            <div><li>
               <Shelf
                  name={"Currently Reading"}
                  id={"currentlyReading"}
                  books={this.props.books}
                  changeShelf={this.props.changeShelf}
                />
                <Shelf
                  name={"Want to Read"}
                  id={"wantToRead"}
                  books={this.props.books}
                  changeShelf={this.props.changeShelf}
                />
                <Shelf
                  name={"Read"}
                  id={"read"}
                  books={this.props.books}
                  changeShelf={this.props.changeShelf}
                />
                </li>
            </div>
    </div>
    <div className="open-search">
        <Link to="/search">
          Add a book
        </Link>
        </div>
    </div>
        )
    }
}
Home.propTypes = {
    books: PropTypes.array
  };
export default Home