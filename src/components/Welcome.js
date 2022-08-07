import { Link } from "react-router-dom";

export default function Welcome() {
    return (
            <div className="welcome-section">
                <span className="text1">Welcome To</span>
                <span className="text2">ANTON & LILY Hotel</span>
                <Link className="LinkText" to="/Main">Get started</Link>
            </div >
    )
}