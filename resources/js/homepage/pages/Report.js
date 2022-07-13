import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import EntriesContext from "../context/EntriesContext";
import { useContext } from 'react';

function Report() {

    const params = useParams()

    const { entries } = useContext(EntriesContext);
    console.log(entries);

    return (
        <Fragment>

            <h1>
                Report of {params.period || 'N/A'} entries:
            </h1>
            <div>
                graph
            </div>
            <div>
                entries
            </div>
            <div>
                pictures
            </div>

        </Fragment>
    )
}
export default Report;