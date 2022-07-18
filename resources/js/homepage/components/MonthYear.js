import { useNavigate } from "react-router-dom";

export function MonthYear({ name, entries, sign, year }) {

    const navigate = useNavigate();

    return (
        <div className="page--year--month" onClick={() => navigate(`/user/report/month/${year}/${sign}`)} >
            <h4>{name}</h4>
            <p>
                {
                    entries
                        .filter(entry => entry.date.match(new RegExp(`-${sign}-`, "i")))
                        .length
                } entries </p>
        </div >
    )

}