import { HotelInfo } from "../Data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTv, faWifi, faPhone, faKitchenSet, faBath, faShower, faVault, faTemperatureFull } from "@fortawesome/free-solid-svg-icons"


import arrow from "../images/arrow.webp"

export default function Roominfo() {
    let params = useParams();

    return (
        <section className="s-6">
            <h4>BOOK A ROOM</h4>
            {
                HotelInfo.filter(item => item.id === params.id).map(item => {
                    return (
                        <div key={item.id} className="boxx" >
                            <div className="main-content">
                                <div className="title">
                                    <Link to="/BookaRoom" className="Link" >
                                        <button>
                                            <img src={arrow} alt="arrow" />
                                        </button>
                                    </Link>
                                    <h5>{item.title}</h5>
                                </div>

                                <div className="slider-class">
                                </div>

                                <div className="Properties">
                                    <h6>Properties:</h6>
                                    <div className="properties-content">
                                        <div className="first-box">
                                            <span>{item.Accommodates}</span>
                                            <span>{item.Size}</span>
                                        </div>
                                        <span>{item.Beds}</span>
                                    </div>
                                </div>

                                <div className="More-Info">
                                    <h6>More Info:</h6>
                                    <p>{item.MoreInfo}</p>
                                </div>

                                <div className="Amenities">
                                    <h6>Amenities:</h6>
                                    <div className="first-line">
                                        <div className="images">
                                            <FontAwesomeIcon className="icon" icon={faTemperatureFull}></FontAwesomeIcon>
                                            <span>A/C</span>
                                        </div>
                                        <div className="images">
                                            <FontAwesomeIcon className="icon" icon={faTv}></FontAwesomeIcon>
                                            <span>Tv</span>
                                        </div>
                                        <div className="images">
                                            <FontAwesomeIcon className="icon" icon={faWifi}></FontAwesomeIcon>
                                            <span>Wifi</span>
                                        </div>
                                        <div className="images">
                                            <FontAwesomeIcon className="icon" icon={faPhone}></FontAwesomeIcon>
                                            <span>Telephone</span>
                                        </div>
                                    </div>

                                    <div className="second-line">
                                        <div className="images">
                                            <FontAwesomeIcon className="icon" icon={faKitchenSet}></FontAwesomeIcon>
                                            <span>Kitchen</span>
                                        </div>
                                        <div className="images">
                                            <FontAwesomeIcon className="icon" icon={faBath}></FontAwesomeIcon>
                                            <span>Bath</span>
                                        </div>
                                        <div className="images">
                                            <FontAwesomeIcon className="icon" icon={faShower}></FontAwesomeIcon>
                                            <span>Shower</span>
                                        </div>
                                        <div className="images">
                                            <FontAwesomeIcon className="icon" icon={faVault}></FontAwesomeIcon>
                                            <span>Safe</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="Date">
                                <div className="date-title">
                                    <h6>From</h6>
                                    <span>{item.Price}</span>
                                    <p>Per Night</p>
                                </div>

                                <form action='/BookaRoom'>
                                    <div>
                                        <label htmlFor='Checkin' >Check-in</label>
                                        <input id='Checkin' type='date' required />
                                    </div>
                                    <div>
                                        <label htmlFor='Checkout' >Check-Out</label>
                                        <input id='Checkout' type='date' required />
                                    </div>
                                    <div>
                                        <label htmlFor='adult' >Adults</label>
                                        <input id='adult' type='number' min='0' max='2' required />
                                    </div>
                                    <div>
                                        <label htmlFor='Kids' >Kids</label>
                                        <input id='Kids' type='number' min='0' max='1' />
                                    </div>
                                    <Link className="btn" to="/BookaRoom">
                                        <button>Book Now</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}