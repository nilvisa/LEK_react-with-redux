import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
            {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // stuff returned from here will show up as props inside BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will edn up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote BookList from a component to a conatiner
// it needs to know about this new dispatch method, selectBook.
// Make it avalible as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);