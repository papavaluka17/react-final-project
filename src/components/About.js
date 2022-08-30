import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();

    return (
        <section className="s-2" id="About"  >
            <h4>{t ("About US")}</h4>
            <p>
                {t ("About us Text")}
            </p>
        </section>
    )
}