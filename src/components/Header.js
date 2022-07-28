import {HashLink as Link} from "react-router-hash-link"

export default function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link smooth className="nav-link" to={'#Home'}>HOME</Link>
                    </li>
                    <li>
                        <Link smooth className="nav-link" to={'/'}>ABOUT</Link>
                    </li>
                    <li>
                        <Link smooth className="nav-link" to={'/'}>ROOMS</Link>
                    </li>
                    <li>
                        <Link smooth className="nav-link" to={'/'}>SERVICES</Link>
                    </li>
                    <li>
                        <Link smooth className="nav-link" to={'/'}>GALLERY</Link>
                    </li>
                    <li>
                        <Link smooth className="nav-link" to={'/'}>SEE & DO</Link>
                    </li>
                    <li>
                        <Link smooth className="nav-link" to={'/'}>CONTACT</Link>
                    </li>
                    <button>Book A Room</button>
                </ul>
            </nav>
        </header>
    )
}