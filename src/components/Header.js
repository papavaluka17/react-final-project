import { HashLink as Link } from "react-router-hash-link"
import Social from "./Social"

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons"

const resources = {
    en: {
        translation: require('../i18n/en.json')
    },
    ka: {
        translation: require('../i18n/ka.json')
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ka",
        interpolation: {
            escapeValue: false
        }
    });


export default function Header() {

    const [Mobile, setMobile] = useState(false)
    const [Language, setLanguage] = useState('en')

    useEffect(() => {
        Changelanguage(Language)
    }, [Language])

    const { t } = useTranslation();
    function Changelanguage(lng) {
        i18n.changeLanguage(lng);
    }



    return (
        <section className="Header-section">
            <header>
                <div className="Header">
                    <nav>
                        <ul className={Mobile ? "Nav-Links-Mobile" : "Nav-Links"}
                            onClick={() => setMobile(false)}
                        >
                            <li>
                                <Link smooth className="Links" to={'/Main#Home'}>{t("HOME")}</Link>
                            </li>
                            <li>
                                <Link smooth className="Links" to={'/Main#About'}>{t("ABOUT")}</Link>
                            </li >
                            <li>
                                <Link smooth className="Links" to={'/Main#Rooms'}>{t("ROOMS")}</Link>
                            </li>
                            <li>
                                <Link smooth className="Links" to={'/Main#Services'}>{t("SERVICES")}</Link>
                            </li>
                            <li>
                                <Link smooth className="Links" to={'/Main#Gallery'}>{t("GALLERY")}</Link>
                            </li>
                            <li>
                                <Link smooth className="Links" to={'/Main#Contact'}>{t("CONTACT")}</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link to="BookaRoom#BookaRoom" className="Btnlink">
                        <button className="mainbtn" >{t('BookARoom')}</button>
                    </Link>
                    <button className="lng" onClick={() => Language === 'en' ? setLanguage('ka') : setLanguage('en')} >{Language}</button>
                    <button className="menu" onClick={() => setMobile(!Mobile)} >
                        {Mobile ? <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}
                    </button>
                </div>
                <Social />
            </header>
        </section>
    )
}