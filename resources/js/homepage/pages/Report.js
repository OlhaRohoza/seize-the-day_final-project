import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useContext } from 'react';

function Report() {

    const params = useParams()

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