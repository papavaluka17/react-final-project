import { useTranslation } from 'react-i18next';
import garden from '../images/img.webp'

export default function Home() {

    const { t } = useTranslation();

    return (
        <section className="s-1" >
            <div className="Homehead">
                <h3>ANTON & LILY</h3>
                <h5>{t ('Bed & Breakfast')}</h5>
            </div>
            <img src={garden} alt='garden' />
            <div className='formwrapper'>
                <form action='/'>
                    <div>
                        <label htmlFor='Checkin' >{t ("Check In")}</label>
                        <input id='Checkin' type='date' required />
                    </div>
                    <div>
                        <label htmlFor='Checkout' >{t ("Check Out")}</label>
                        <input id='Checkout' type='date' required />
                    </div>
                    <div>
                        <label htmlFor='adult' >{t ("Adults")}</label>
                        <input id='adult' type='number' min='0' max='5' required />
                    </div>
                    <div>
                        <label htmlFor='Kids' >{t ("Kids")}</label>
                        <input id='Kids' type='number' min='0' max='5' />
                    </div>
                    <button>{t("search")}</button>
                </form>
            </div>
        </section>
    )
}