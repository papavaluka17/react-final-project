import { HotelInfo } from "../Data";
import { Link } from "react-router-dom";
import { useState } from "react";
// images import

export default function BookaRoom() {

    const [LoadMore, setLoadMore] = useState(3)

    const HotelMoreinfo = HotelInfo.slice(0, LoadMore)

    function More() {
        if (LoadMore <= 3) {
            setLoadMore(LoadMore + LoadMore)
        } else{
            setLoadMore(LoadMore - 3)
        }
        
    }

    return (
        <div className="BookaRoom" id="BookaRoom">
            <h2>BOOK A ROOM</h2>
            <div className="box">
                {
                    HotelMoreinfo.map((item, index) => {
                        return (
                            <div key={index} className="room-box">
                                <div className="room-box2">
                                    <div className="img-class">
                                        <img src={item.img} alt={item.title} />
                                        <div className="new-box">
                                            <div className="Responsive-info">
                                                <h3>{item.title}</h3>
                                                <div className="responsive-content">
                                                    <h6>From</h6>
                                                    <Link to={`${item.id}`} className="responsive-moreinfo">
                                                        <span>{item.Price} </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
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

                <button onClick={() => More()}>
                    Load More
                </button>
            </div>
        </div>
    )
}