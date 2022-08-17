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
                aria-label='Enter your search term'
                className="input"
                placeholder={`Search for pics here!`}
                value={query || ''}
                spellCheck={true}
                onChange={(e) => setQuery(e.target.value)}
                required
            />
            <button type="submit" className="button">
                Search
            </button>
        </form>
    );
}

export default SearchBar; 