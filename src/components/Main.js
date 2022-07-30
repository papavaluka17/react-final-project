import Home from "./Home";
import About from "./About";
import Rooms from "./Rooms";
// import Welcome from "./Welcome";

export default function Main() {
    return(
        <div>
            <Home />
            <About />
            <Rooms />
            {/* <Welcome /> */}
        </div>
    )
}