import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"

export default function Rooms() {
    const { t } = useTranslation();

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <section data-aos="fade-up" className="s-3" id="Rooms">
            <div className="box">
                <h4>{t ("Rooms")}</h4>
                <p>
                    {t("Rooms-text")}
                </p>
                <Link to="/BookaRoom" className="Btnlink">
                    <button className="mainbtn" >{t ("BookARoom")}</button>
                </Link>
            </div>
        </section>
    )
}