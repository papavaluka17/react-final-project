import { HotelInfo } from "../Data";
import { Link } from "react-router-dom";

// images import

export default function BookaRoom() {
    return (
        <div className="BookaRoom">
            <h2>BOOK A ROOM</h2>
            <div className="box">
                {
                    HotelInfo.map((item, index) => {
                        return (
                            <div key={index} className="room-box">
                                <div className="room-box2">
                                    <div className="img-class">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className="content-box">
                                        <h3>{item.title}</h3>
                                        <p>{item.Description}</p>
                                        <span>{item.Size}</span>
                                        <br />
                                        <span>{item.Beds}</span>
                                    </div>
                                    <div className="button-box">
                                        <h6>From</h6>
                                        <span>{item.Price}</span>
                                        <br />
                                        <Link to={`${item.id}`} className="moreinfo">
                                            <button>More info</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}