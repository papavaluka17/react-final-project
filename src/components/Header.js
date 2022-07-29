import { HashLink as Link } from "react-router-hash-link"
import menu from '../images/menu.jpg'
import Social from "./Social"

export default function Header() {
    return (
        <header>
            <div className="Header">
                <nav>
                    <ul>
                        <li>
                            <Link smooth className="nav-link" to={'/Main'} >HOME</Link>
                        </li>
                        <li>
                            <Link smooth className="nav-link" to={'/Main'}>ABOUT</Link>
                        </li>
                        <li>
                            <Link smooth className="nav-link" to={'/Main'}>ROOMS</Link>
                        </li>
                        <li>
                            <Link smooth className="nav-link" to={'/Main'}>SERVICES</Link>
                        </li>
                        <li>
                            <Link smooth className="nav-link" to={'/Main'}>GALLERY</Link>
                        </li>
                        <li>
                            <Link smooth className="nav-link" to={'/Main'}>SEE & DO</Link>
                        </li>
                        <li>
                            <Link smooth className="nav-link" to={'/Main'}>CONTACT</Link>
                        </li>
                    </ul>
                </nav>
                <Link to="BookaRoom" className="Btnlink">
                    <button className="mainbtn" >Book A Room</button>
                </Link>
                <button>EN</button>
                <div className="menu" >
                    <img className="menuicon" src={menu} alt="menu" />
                </div>
            </div>
            <Social />
        </header>
    )
}