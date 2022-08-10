// import './App.css';
import { useState } from 'react';

function SearchBar() {
    const [query, setQuery] = useState("");

    const searchBar = async (e) => {
        e.preventDefault();
        console.log("Submitting the Form")
    };

    return (
        <form className="form" onSubmit={searchBar}>
            <label className="label" htmlFor="query">
                {" "}
            </label>
            <input
                type="text"
                name="query"
                className="input"
                placeholder={`Try "tech" or "puppies"`}
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