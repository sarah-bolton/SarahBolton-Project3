import { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';
import SearchBar from './SearchBar';
import DisplayPhotos from './DisplayPhotos';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const [allPhotos, setAllPhotos] = useState([]);
  const [query, setQuery] = useState("")
  // useEffect to get API data with axios, params: client_id, query
  useEffect(() => {
    const key = 'TMerRFWGfjTBDdKTuLtzqQkYy-Tzm7kdNEaD67lSe-A';
    if (query) {
      axios({
        url: "https://api.unsplash.com/search/photos",
        method: "GET",
        dataResponse: "json",
        params: {
          client_id: key,
          query: query,
          per_page: 500,
        },
      }).then((response) => {
        // updating state and displaying the array images from the user's query
        setAllPhotos(response.data.results);
      })
    }
    // updating dependency array with query
  }, [query]);

  const getPhotos = (e, searchquery) => {
    e.preventDefault();
    setQuery(searchquery);
  }

  return (
    <div className="App">
      <header>
        <h1>ünsplish</h1>
        <SearchBar getPhotos={getPhotos} />
        {/* user is instructed to type in a subject they would like pictures of */}
      </header>
      <div className="container">
        <DisplayPhotos photos={allPhotos} />
        {/* stretch goal: infinite scroll component */}
        <InfiniteScroll
          dataLength={allPhotos.length}
          next={getPhotos}
          hasMore={true}
        // loader={<div class="lds-dual-ring"></div>}
        >

        </InfiniteScroll>
      </div>
      <footer>
        <p>Made by Sarah at Juno College</p>
      </footer>
    </div>

  );
}

export default App;
