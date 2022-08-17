import { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';
import SearchBar from './SearchBar';
import DisplayPhotos from './DisplayPhotos';

function App() {
  const [allPhotos, setAllPhotos] = useState([]);
  const [query, setQuery] = useState("")
  const [error, setError] = useState(null);

  const getPhotos = (e, searchquery) => {
    e.preventDefault();
    setQuery(searchquery);
    if (allPhotos.length === 0) {
      setError('No images matching your search, please try again');
      // } else {
      //   setError(false);
      // }
    }
  }
  // useEffect to get API data for search bar
  useEffect(() => {
    if (query) {
      axios({
        url: "https://api.unsplash.com/search/photos",
        method: "GET",
        dataResponse: "json",
        params: {
          client_id: 'TMerRFWGfjTBDdKTuLtzqQkYy-Tzm7kdNEaD67lSe-A',
          query: query,
          per_page: 30,
        },
      }).then((response) => {
        const results = response.data.results;
        // updating state and displaying the array images from the user's query
        setAllPhotos(results);
      })
    }
    // updating dependency array with query
  }, [query]);


  return (
    <div className="App">
      <header>
        <h1>ünsplish</h1>
        <SearchBar getPhotos={getPhotos} />
      </header>
      <div className="container">
        <DisplayPhotos photos={allPhotos} error={error} />
      </div>
      <footer>
        <p>Made by Sarah at&nbsp;<a href="https://junocollege.com/" alt="Juno College">Juno College </a></p>
      </footer>
    </div>

  );
}
export default App;
