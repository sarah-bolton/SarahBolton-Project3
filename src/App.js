import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './SearchBar';
import DisplayPhotos from './DisplayPhotos';

function App() {
  // useEffect to get API data with axios, params: client_id, per_page, query
  useEffect(() => {
    const key = 'TMerRFWGfjTBDdKTuLtzqQkYy-Tzm7kdNEaD67lSe-A';
    axios({
      url: "https://api.unsplash.com/search/photos",
      method: "GET",
      dataResponse: "json",
      params: {
        client_id: key,
        query: 'photos',
        per_page: 30,
      },
    }).then((response) => {
      console.log(response.data);
    });
  });
  return (
    <div className="App">
      <div className="container">
        <h1>the pix fix</h1>
        <h2>production branch edit</h2>
        <SearchBar />
        <DisplayPhotos />
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
