import React from 'react'
import { Link } from "react-router-dom";

export default function Modal({ CLoseModal }) {

    function HandleModal() {
        CLoseModal(false)
        alert("Thanks for submitting!")
    }

    return (
        <div className='ModalBackground'>
            <div className='ModalContainer'>
                <div className='CloseModal'>
                    <button onClick={() => CLoseModal(false)}>X</button>
                </div>
                <div className='title'>
                    <h2>Are You Sure You Want To Continue?</h2>
                </div>
                <div className='content'>
                    <p>Your information is stored securely</p>
                </div>
                <div className='footer'>
                    <button onClick={() => CLoseModal(false)}>
                        Cancel
                    </button>
                    <Link to="/Main" className='btn' >
                        <button id='Continue' onClick={HandleModal} >
                            Continue
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}