import { useState } from 'react';

function SearchBar(props) {
    const [query, setQuery] = useState("");

    return (
        // once the user has pressed enter or the search button, it will then allow all pictures to render to the page
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
                placeholder={`Search for hi-res pictures here!`}
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