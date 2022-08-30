import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Rooms() {
    const { t } = useTranslation();
    return (
        <section className="s-3" id="Rooms">
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