import { useState } from "react"

export default function Details() {

    const [Name, setName] = useState([]);
    const [Lastname, setLastname] = useState([]);
    const [Email, setEmail] = useState([]);
    const [Number, setNumber] = useState([])
    const [Request, setRequest] = useState([])

    const Country = ["Country","Albania", "Algeria", "Armenia", "Australia", "Belgium", "Canada", "Egypt", "Georgia",
        "Germany", "Italy", "Ukraine", "Uruguay", "Slovenia", "Libya"]

        function submitevent(e) {
            e.preventDefault()
            alert("Congratulations! " + Name + " ,your reservation was placed.")
            setName("")
            setLastname("")
            setEmail("")
            setNumber("")
            setRequest("")
        }

    return (
        <section className="s-7">
            <h4>BOOK A ROOM</h4>
            <div className="Details-wrap">
                <div className="Guest-Details">
                    <h6>Guest Details</h6>

                    <div className="form-wrap">
                        <form method="POST" onSubmit={submitevent}>
                            <div>
                                <label htmlFor="firstname">Invalid name</label>
                                <input value={Name} onChange={(e) => setName(e.target.value)} type="text" id="firstname" name="firstname" required />
                            </div>

                            <div>
                                <label htmlFor="lastname">Invalid last name</label>
                                <input value={Lastname} onChange={(e) => setLastname(e.target.value)} type="text" id="lastname" name="lastname" required />
                            </div>

                            <div>
                                <label htmlFor="email">Invalid email address</label>
                                <input value={Email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" required />
                            </div>

                            <div>
                                <label htmlFor="text"> Invalid phone number</label>
                                <input value={Number} onChange={(e) => setNumber(e.target.value)} type="text" id="text" name="text" required />
                            </div>

                            <div>
                                <label htmlFor="Country">Country</label>
                                <select id="Country">
                                    {
                                        Country.map((item, index) => {
                                            return (
                                                <option key={index} value={item} >{item}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <div>
                                <label htmlFor="request">Special Requests</label>
                                <textarea value={Request} onChange={(e) => setRequest(e.target.value)} id="request"></textarea>
                            </div>

                            <span> By completing this booking I acknowledge I have read and accepted the Property Policies.</span>
                            <button type="submit">Continue to Check Out</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}