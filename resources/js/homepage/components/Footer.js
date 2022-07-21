import { Link } from "react-router-dom";

export function Footer() {
    return (
        <div className="footer">
            <p><strong>© 2022</strong></p>
            <p><Link to="/about-us">About us</Link></p>
        </div>
    )
}