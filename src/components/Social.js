import fb from "../images/fb.png"
import instagram from "../images/instagram.png"
import tripadviusor from "../images/tripadviusor.png"

export default function Social() {
    return (
        <div className="socialicons">
            <a className="sociallinks" href="https://www.tripadvisor.com/" target="_blank" rel="noopener noreferrer">
                <img src={tripadviusor} alt="tripadviusor" />
            </a>
            <a className="sociallinks" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src={fb} alt="fb" />
            </a>
            <a className="sociallinks" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="instagram" />
            </a>
        </div>
    )
}