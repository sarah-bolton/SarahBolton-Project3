// import './App.css';
import { useState } from 'react';

function SearchBar(props) {
    const [query, setQuery] = useState("");
    // console.log(query)

    // const searchBar = async (e) => {
    //     e.preventDefault();
    //     console.log("Submitting the Form")
    // };

    return (
        <form className="form" onSubmit={
            (e) => { props.getPhotos(e, query) }
        }>
            <label className="label" htmlFor="query">
                {" "}
            </label>
            <input
                type="text"
                name="query"
                className="input"
                placeholder={`Try "tech" or "kittens"`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="button">
                Search
            </button>
        </form>
    );
}

export default SearchBar; 