import { Fragment, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { searchEntries } from "../actions/entries";

export function Search() {

    const params = useParams();
    console.log(params);

    const [entries, setEntries] = useState([]);
    const [loadingEntries, setLoadingEntries] = useState(false)

    const [currentPage, setCurrentPage] = useState(0);
    const [perPage, setPerPage] = useState(25);

    const navigate = useNavigate();

    const fetchData = async () => {
        setLoadingEntries(true);

        const res = await searchEntries(params.phrase);
        console.log(res);

        setEntries(res);
        setLoadingEntries(false);
    }

    useEffect(() => {

        fetchData()

    }, [params])

    return (
        <Fragment>
            <div className="entries--search-result">
                <h2> You are searching for <i>{params.phrase}</i> </h2>
                {
                    loadingEntries ? 'loading...' :
                        entries.length ?
                            (<><h4>You have {entries.length} entries</h4>
                                {/* {(entries.length % 25) > 1 ? <> <p>You have {Math.round(entries.length / 25)} pages. Page {currentPage + 1} </p> </> : ''} */}
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Rate</th>
                                            <th>Note</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            entries.slice(currentPage * perPage, (currentPage + 1) * perPage).map((entry) => (
                                                <tr key={entry.id} onClick={() => navigate('/user/day/' + entry.date)}>
                                                    <td>{entry.date} </td>
                                                    <td style={{ textAlign: 'center' }}>{entry.rate} </td>
                                                    <td>{entry.note.length < 99 ? entry.note : entry.note.substring(0, 100)} ...</td>
                                                </tr>)
                                            )
                                        }

                                    </tbody>

                                </table>
                                <div className="page--search--buttons" style={{ textAlign: 'center' }}>
                                    {
                                        !!currentPage && <button onClick={() => setCurrentPage(!currentPage ? currentPage : currentPage - 1)}>back</button>
                                    }
                                    {
                                        entries.length - ((currentPage || 1) * perPage) > perPage && <button onClick={() => setCurrentPage(currentPage + 1)}>next</button>
                                    }

                                </div>

                            </>) :
                            (<> <p>You have no entries with the <strong>{params.phrase}</strong>. </p>
                                <Link to='/user'>You can create here </Link>
                            </>)
                }
            </div>
        </Fragment>
    )
}