import { useState } from 'react';

function Searchbar() {
    const [query, setQuery] = useState("")

    const handleSearch = () => {
        console.log(query);
        setQuery('');
    }

    return (
        <div className="search--notes"  >
            <input type='text' placeholder="Search through entries" onChange={(e) => setQuery(e.target.value)} />
            <input type='submit' value='search' style={{ marginLeft: '5px' }} onClick={handleSearch} />
        </div>
    )
}

export default Searchbar;