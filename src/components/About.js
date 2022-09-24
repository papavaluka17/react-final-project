import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function About() {
    const { t } = useTranslation();

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <section data-aos="fade-up" className="s-2" id="About"  >
            <h4>{t ("About US")}</h4>
            <p>
                {t ("About us Text")}
            </p>
        </section>
    )
}