export function MonthYear({ name, entries, sign }) {
    return (
        <div className="page--year--month">
            <h4>{name}</h4>
            <p>
                {
                    entries
                        .filter(entry => entry.date.match(new RegExp(`${sign}`, "i")))
                        .length
                } entries </p>
        </div >
    )

}