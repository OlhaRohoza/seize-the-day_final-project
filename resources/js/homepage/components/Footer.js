import { Link } from "react-router-dom";

export function Footer() {
    return (
        <div className="footer">
            <p>© 2022</p>
            <p><Link to="/about-us">About us</Link></p>
        </div>
    )
}