import { Link } from "react-router-dom";

export default function Rooms() {
    return (
        <section className="s-3">
            <div className="box">
                <h4>OUR ROOMS</h4>
                <p>
                    ANTON & LILY hotel has several types <br />
                    of rooms, you can choose according to <br />
                    the number and size of people.
                </p>
                <Link to="/BookaRoom" className="Btnlink">
                    <button className="mainbtn" >Book A Room</button>
                </Link>
            </div>
        </section>
    )
}