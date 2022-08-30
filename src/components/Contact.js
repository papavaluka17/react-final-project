import { useState } from "react";
import Modal from "./Modal";


export default function Contact() {

    const [OpenModal, setOpenModal] = useState(false)
    const [Disabled, setDisabled] = useState(false)
    const [Value, setValue] = useState("")

    function Handle(e) {
        e.preventDefault();
        if (Value) {
            setDisabled(true);
            setOpenModal(true);
        } else {
            setDisabled(false)
        }
    }

    return (
        <div>
            <section className=" container " id="Contact">
                <h4>CONTACT US</h4>
                <div className="contact-info">
                    <span>
                        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer">Anton.Lily@gmail.com</a>
                    </span>
                    <span>Guria Str., Bakhmaro 4900 Georgia</span>
                    <a href="tel:1234567890">Tel: 123-456-7890 </a>
                </div>
                <form>
                    <div className="input-1">
                        <div className="first-box">
                            <div className="input-2">
                                <label htmlFor="Name">Enter Your Name</label>
                                <input type="text" placeholder="Name" name="Name" id="Name" />
                            </div>
                            <div className="input-2">
                                <label htmlFor="Email">Enter Your Email</label>
                                <input value={Value} onChange={(e) => setValue(e.target.value)} type="email" placeholder="Email" name="Email" id="Email" />
                            </div>
                        </div>
                        <div className="subject-class">
                            <label htmlFor="Subject">Enter Your Subject</label>
                            <input type="text" placeholder="Subject" name="Subject" id="Subject" />
                        </div>
                        <div className="Textarea-class">
                            <label htmlFor="Message">Enter Your Message</label>
                            <textarea name="Message" id="Message" placeholder="Message" ></textarea>
                        </div>
                    </div>
                    <input type="submit" onClick={Handle} />
                </form>
            </section>
            {OpenModal && <Modal CLoseModal={setOpenModal} />}
        </div>
    )
}