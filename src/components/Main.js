import Home from "./Home";
import About from "./About";
import Rooms from "./Rooms";
import Services from "./Services";
import Gallery from "./Gallery";
import Review from "./Review";

export default function Main() {
    return(
        <div>
            <Home />
            <About />
            <Rooms />
            <Services />
            <Gallery />
            <Review />
        </div>
    )
}