import { Fragment } from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getEntries } from "../actions/entries";
import { MonthYear } from "../components/MonthYear";

export function YearPage() {

    const [entries, setEntries] = useState([])
    const [loadingEntries, setLoadingEntries] = useState(false);

    const navigate = useNavigate();

    const params = useParams();

    console.log(params);
    console.log(entries);

    const fetchData = async () => {
        setLoadingEntries(true)
        const payload = { type: 'year', value: params.year };

        const res = await getEntries(payload);

        setEntries(res);
        setLoadingEntries(false)

    }

    useEffect(() => {

        fetchData()

    }, [])

    return (
        <Fragment>
            {loadingEntries ? 'loading...' :
                <>
                    <h2 style={{ textAlign: 'center' }}> {params.year} YEAR</h2>
                    <h4 style={{ textAlign: 'center' }}> You have {entries.length} entries</h4>

                    <div className="page--year">
                        <div className="page--year--quarter">
                            <MonthYear name='JANUARY' entries={entries} sign='-01-' onClick={() => navigate(`/user/report/month/${params.year}-01`)} />
                            <MonthYear name='FEBRUARY' entries={entries} sign='-02-' />
                            <MonthYear name='MARTH' entries={entries} sign='-03-' />
                        </div>
                        <div className="page--year--quarter">
                            <MonthYear name='APRIL' entries={entries} sign='-04-' />
                            <MonthYear name='MAY' entries={entries} sign='-05-' />
                            <MonthYear name='JUNE' entries={entries} sign='-06-' />
                        </div>
                        <div className="page--year--quarter">
                            <MonthYear name='JULY' entries={entries} sign='-07-' />
                            <MonthYear name='AUGUST' entries={entries} sign='-08-' />
                            <MonthYear name='SEPTEMBER' entries={entries} sign='-09-' />
                        </div>
                        <div className="page--year--quarter">
                            <MonthYear name='OCTOBER' entries={entries} sign='-10-' />
                            <MonthYear name='NOVEMBER' entries={entries} sign='-11-' />
                            <MonthYear name='DECEMBER' entries={entries} sign='-12-' />
                        </div>
                    </div></>}
        </Fragment>
    )
}