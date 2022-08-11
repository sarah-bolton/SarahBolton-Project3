import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './SearchBar';
import DisplayPhotos from './DisplayPhotos';

function App() {
  const [allPhotos, setAllPhotos] = useState([]);
  const [query, setQuery] = useState("")
  // useEffect to get API data with axios, params: client_id, per_page, query
  useEffect(() => {
    console.log("useeffect running")
    const key = 'TMerRFWGfjTBDdKTuLtzqQkYy-Tzm7kdNEaD67lSe-A';
    if (query) {
      axios({
        url: "https://api.unsplash.com/search/photos",
        method: "GET",
        dataResponse: "json",
        params: {
          client_id: key,
          query: query,
          per_page: 30,
        },
      }).then((response) => {
        // console.log(response.data.results);
        setAllPhotos(response.data.results);
      });
    }
  }, [query]);

  const getPhotos = (e, searchquery) => {
    e.preventDefault();
    setQuery(searchquery);
    console.log('here is what the user queried', searchquery);
  }
  console.log("app has rendered")

  return (
    <div className="App">
      <div className="container">
        <h1>unsplish</h1>
        <SearchBar getPhotos={getPhotos} />
        <DisplayPhotos photos={allPhotos} />
      </div>
    </div>
  );
}

// User is instructed to type in a subject they would like pictures of

// Once the user has pressed the search button, it will then allow all pictures to render to the page

// useEffect to get API data with axios, params: client_id, per_page, query

// have useState hooks to store values (ie. ‘imgInfo, setImgInfo’ getting user info from the ‘value’ in the input text field of the search bar) and update values (ie. ‘resDisplayed, setResDisplayed’ showing the results displayed on the page)

// Mapping over the result to return imgs (urls and alt description)

// Clear search bar once page loads with all images

// Error handling if no photos are found

export default App;
