import logo from "../img/logo.png";
import {Link} from "react-router-dom";
import events from "../img/events.jpg";
import places from "../img/placetoeat.jpeg";
import activities from "../img/activity.jpg";
import attractions from "../img/atractions.jpg";
import AddIcon from '@mui/icons-material/Add';


export default function HomePage() {

    return(
    <main>
        <section>
            <img className="logo" src={logo} alt="Visit Denmark"></img>
        </section>
        <section className="top-container-home">
            <div className="container-cards-home">
                <Link className="firstcard commoncard" to="/events">
                    <img className="pictures-cards-home" src={events} alt="VisitDenmarkEvents"></img> 
                    <h1 className="card-title">EVENTS</h1>
                    <div className="card-frame frame1"></div>
                </Link>
                <Link className="secondcard commoncard" to="/places">
                    <img className="pictures-cards-home" src={places} alt="VisitDenmarkPlaces"></img>
                    <h1 className="card-title">PLACES<br></br>TO EAT</h1>
                    <div className="card-frame frame2"></div>
                </Link>
                <Link className="thirdcard commoncard" to="/activities">
                    <img className="pictures-cards-home" src={activities} alt="VisitDenmarkPlaces"></img>
                    <h1 className="card-title">ACTIVITIES</h1>
                    <div className="card-frame frame3"></div>
                </Link>
                <Link className="fourthcard commoncard" to="/attractions">
                    <img className="pictures-cards-home" src={attractions} alt="VisitDenmarkPlaces"></img>
                    <h1 className="card-title">ATTRACTIONS</h1>
                    <div className="card-frame frame4"></div>
                </Link>
            </div>
        </section>
        <section>
            <div className="second-part-container-home">
                <h1 className="trips-title">YOUR TRIPS:</h1>
            </div>
            <Link to="/schedule" className="container-trips-1">
                <h1>FAMILY TRIP</h1>
            </Link>
            <Link to="/yourtrip" className="container-trips-2">
                <h1>ADD TRIP</h1>
                <AddIcon></AddIcon>
            </Link>
        </section>
    </main>
)}