import { Fragment } from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getEntries } from "../actions/entries";
import { MonthYear } from "../components/MonthYear";

export function YearPage() {

    const [entries, setEntries] = useState([])
    const [loadingEntries, setLoadingEntries] = useState(false);

    const params = useParams();

    // console.log(params);
    // console.log(entries);

    const fetchData = async () => {
        setLoadingEntries(true)
        const payload = { type: 'year', value: params.year };

        const res = await getEntries(payload);

        setEntries(res);
        setLoadingEntries(false)

    }

    useEffect(() => {

        fetchData()

    }, [params])

    return (
        <Fragment>
            {loadingEntries ? 'loading...' :
                <>
                    <h2 style={{ textAlign: 'center' }}> {params.year} YEAR</h2>
                    <h4 style={{ textAlign: 'center' }}> You have {entries.length} entries</h4>

                    <div className="page--year">
                        <div className="page--year--quarter">
                            <MonthYear name='JANUARY' entries={entries} sign='01' year={params.year} />
                            <MonthYear name='FEBRUARY' entries={entries} sign='02' year={params.year} />
                            <MonthYear name='MARTH' entries={entries} sign='03' year={params.year} />
                        </div>
                        <div className="page--year--quarter">
                            <MonthYear name='APRIL' entries={entries} sign='04' year={params.year} />
                            <MonthYear name='MAY' entries={entries} sign='05' year={params.year} />
                            <MonthYear name='JUNE' entries={entries} sign='06' year={params.year} />
                        </div>
                        <div className="page--year--quarter">
                            <MonthYear name='JULY' entries={entries} sign='07' year={params.year} />
                            <MonthYear name='AUGUST' entries={entries} sign='08' year={params.year} />
                            <MonthYear name='SEPTEMBER' entries={entries} sign='09' year={params.year} />
                        </div>
                        <div className="page--year--quarter">
                            <MonthYear name='OCTOBER' entries={entries} sign='10' year={params.year} />
                            <MonthYear name='NOVEMBER' entries={entries} sign='11' year={params.year} />
                            <MonthYear name='DECEMBER' entries={entries} sign='12' year={params.year} />
                        </div>
                    </div></>}
        </Fragment>
    )
}