import { HashLink as Link } from "react-router-hash-link"
import menu from '../images/menu.jpg'
import Social from "./Social"

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';


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

    const [Language, setLanguage] = useState('en')

    useEffect(() => {
      Changelanguage(Language)
    }, [Language])
  
    const { t } = useTranslation();
    function Changelanguage(lng) {
      i18n.changeLanguage(lng);
    }
  


    return (
        <header>
            <div className="Header">
                <nav>
                    <ul>
                        <li>
                            <Link smooth className="nav-link" to={'/Main'} >{t("HOME")}</Link>
                        </li>
                        <li>
                            <Link smooth className="nav-link" to={'/Main'}>{t("ABOUT")}</Link>
                        </li>
                        <li>
                            <Link smooth className="nav-link" to={'/Main'}>{t("ROOMS")}</Link>
                        </li>
                        <li>
                            <Link smooth className="nav-link" to={'/Main'}>{t("SERVICES")}</Link>
                        </li>
                        <li>
                            <Link smooth className="nav-link" to={'/Main'}>{t("GALLERY")}</Link>
                        </li>
                        <li>
                            <Link smooth className="nav-link" to={'/Main'}>{t("CONTACT")}</Link>
                        </li>
                    </ul>
                </nav>
                <Link to="BookaRoom" className="Btnlink">
                    <button className="mainbtn" >{t ('BookARoom')}</button>
                </Link>
                <button className="lng" onClick={() => Language === 'en' ? setLanguage('ka') : setLanguage('en')} >{Language}</button>
                <div className="menu" >
                    <img className="menuicon" src={menu} alt="menu" />
                </div>
            </div>
            <Social />
        </header>
    )
}