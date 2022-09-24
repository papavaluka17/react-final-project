import { HotelInfo } from "../Data";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTv, faWifi, faPhone, faKitchenSet, faBath, faShower, faVault, faTemperatureFull } from "@fortawesome/free-solid-svg-icons"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


// images import

class BookaRoom extends React.Component {

    State = {
        LoadMore: 3
    }

    More() {
        if (this.State.LoadMore <= 3) {
            this.setState(this.State.LoadMore + this.State.LoadMore)
        } else {
            this.setState(this.State.LoadMore - 3)
        }
    }

    render() {
       const HotelMoreinfo = HotelInfo.slice(0, this.State.LoadMore)
       
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
                                            <br />
                                            <div className="Amenities-2">
                                                <span>
                                                    <Tippy className="Tippy" content="Tv">
                                                        <FontAwesomeIcon className="icon" icon={faTv}></FontAwesomeIcon>
                                                    </Tippy>
                                                </span>
                                                <span>
                                                    <Tippy content="Wifi">
                                                        <FontAwesomeIcon className="icon" icon={faWifi}></FontAwesomeIcon>
                                                    </Tippy>
                                                </span>
                                                <span>
                                                    <Tippy content="Telephone">
                                                        <FontAwesomeIcon className="icon" icon={faPhone}></FontAwesomeIcon>
                                                    </Tippy>
                                                </span>
                                                <span>
                                                    <Tippy content="Kitchen">
                                                        <FontAwesomeIcon className="icon" icon={faKitchenSet}></FontAwesomeIcon>
                                                    </Tippy>
                                                </span>
                                                <span>
                                                    <Tippy content="Bath">
                                                        <FontAwesomeIcon className="icon" icon={faBath}></FontAwesomeIcon>
                                                    </Tippy>
                                                </span>
                                                <span>
                                                    <Tippy content="Shower">
                                                        <FontAwesomeIcon className="icon" icon={faShower}></FontAwesomeIcon>
                                                    </Tippy>
                                                </span>
                                                <span>
                                                    <Tippy content="Safe">
                                                        <FontAwesomeIcon className="icon" icon={faVault}></FontAwesomeIcon>
                                                    </Tippy>
                                                </span>
                                                <span>
                                                    <Tippy content="A/C">
                                                        <FontAwesomeIcon className="icon" icon={faTemperatureFull}></FontAwesomeIcon>
                                                    </Tippy>
                                                </span>
                                            </div>
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

                    <button onClick={() => this.More()}>
                        Load More
                    </button>
                </div>
            </div>
        )
    }
}

export default BookaRoom;