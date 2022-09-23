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
             <h4>{t ("Our-Services")}</h4>
            <div className="Content-wrap">
                <div className="content">
                    <img src={brakfast} alt="brakfast" />
                    <h6>{t ("Breakfast")}</h6>
                    <p>{t ("Breakfast-Text")}</p>
                </div>

                <div className="content">
                    <img src={Garden} alt="Garden" />
                    <h6>{t ("Garden")}</h6>
                    <p>{t ("Garden-Text")}</p>
                </div>

                <div className="content">
                    <img src={pool} alt="pool" />
                    <h6>{t ("Pool")}</h6>
                    <p>{t ("Pool-Text")}</p>
                </div>

                <div className="content">
                    <img src={wifi} alt="wifi" />
                    <h6>{t ("Free-wifi")}</h6>
                    <p>{t ("Free-Wifi-Text")}</p>
                </div>

                <div className="content">
                    <img src={Housekeeping} alt="Housekeeping" />
                    <h6>{t ("Housekeeping")}</h6>
                    <p>{t ("Housekeeping-Text")}</p>
                </div>

                <div className="content">
                    <img src={Dining} alt="Dining" />
                    <h6>{t ("Dining-Service")}</h6>
                    <p>{t ("Dining-Service-text")}</p>
                </div>
            </div>
        </section>
    )
}