import garden from '../images/img.webp'

export default function Home() {
    return (
        <section className="s-1" >
            <div className="Homehead">
                <h3>ANTON & LILY</h3>
                <h5>Bed & Breakfast</h5>
            </div>
            <img src={garden} alt='garden' />
            <div className='formwrapper'>
                <form action='/'>
                    <div>
                        <label htmlFor='Checkin' >Check In</label>
                        <input id='Checkin' type='date' required />
                    </div>
                    <div>
                        <label htmlFor='Checkout' >Check Out</label>
                        <input id='Checkout' type='date' required />
                    </div>
                    <div>
                        <label htmlFor='adult' >Adults</label>
                        <input id='adult' type='number' min='0' max='5' required />
                    </div>
                    <div>
                        <label htmlFor='Kids' >Kids</label>
                        <input id='Kids' type='number' min='0' max='5' />
                    </div>
                    <button>Search</button>
                </form>
            </div>
        </section>
    )
}