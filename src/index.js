import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDfxJ-hiHH9PRKCH08NXFt9i3l4IZDwa2g';

// create a new comp. should produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// take this comp's generated html and on the page
ReactDOM.render(<App />, document.querySelector('.container'));