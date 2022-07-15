import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Searchbar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        console.log(query);
        console.log('/user/search/' + query);

        navigate('/user/search/' + query);
    }

    return (
        <div className="search--notes"  >
            <input type='text' placeholder="Search through entries" value={query} onChange={(e) => setQuery(e.target.value)} />
            <input type='submit' value='search' style={{ marginLeft: '5px' }} onClick={handleClick} />
        </div>
    )
}

export default Searchbar;