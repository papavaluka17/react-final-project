import brakfast from "../images/Breakfast.png"
import Garden from "../images/Garden.png"
import pool from "../images/Pool.png"
import wifi from "../images/wifi.png"
import Housekeeping from "../images/Housekeeping.png"
import Dining from "../images/Dining.png"
import { useTranslation } from "react-i18next";


export default function Services() {

    const { t } = useTranslation();

    return(
        <section className="s-4" id="Services">
             <h4>OUR SERVICES</h4>
            <div className="Content-wrap">
                <div className="content">
                    <img src={brakfast} alt="brakfast" />
                    <h6>Breakfast</h6>
                    <p>A breakfast tailored to your taste every morning</p>
                </div>

                <div className="content">
                    <img src={Garden} alt="Garden" />
                    <h6>Garden</h6>
                    <p>A garden arranged for quiet, pleasant relaxation</p>
                </div>

                <div className="content">
                    <img src={pool} alt="pool" />
                    <h6>Pool</h6>
                    <p>A clean and comfortable pool will meet you with us</p>
                </div>

                <div className="content">
                    <img src={wifi} alt="wifi" />
                    <h6>Free Wifi</h6>
                    <p>Modern and fastest Wifi in our hotel</p>
                </div>

                <div className="content">
                    <img src={Housekeeping} alt="Housekeeping" />
                    <h6>Daily Housekeeping</h6>
                    <p>A housekeeper will serve you every day in our hotel</p>
                </div>

                <div className="content">
                    <img src={Dining} alt="Dining" />
                    <h6>In-Room Dining Service</h6>
                    <p>In our hotel you will find in-room dining service</p>
                </div>
            </div>
        </section>
    )
}