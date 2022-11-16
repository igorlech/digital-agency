import logo from "../img/logo.png";
import { BackButton } from '../components/BackButton';
import { useState, useEffect } from "react";
import DateScheduleModule from "../components/DateScheduleModule";

export default function SchedulePage() {

    const [posts, setPosts] = useState([]);
    const [isPosts, setIsPosts] = useState(true);
    
    useEffect(() => {
        async function getPosts() {
        const url =
        "https://digital-agency-storage-default-rtdb.europe-west1.firebasedatabase.app/trip.json";
        const response = await fetch(url);
        const data = await response.json();
        if (data !== null) {
            const postsArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
            }));
            setPosts(postsArray);
        } else {
            setIsPosts(false);
        }
        }
        getPosts();
    }, []);

    return(
        <main>
            <section>
                <img src={logo} className="logo" alt="visit-denmark"/> 
            </section>
            <section>
                <h1 className="title-pages">FAMILY TRIP</h1>
            </section>
            <div className="container-schedule">
                <div className="thursday-content">
                    <h2 className="date-schedule">Thursday<br></br>17/11</h2>
                    <h3 className="content-place-schedule">10:00 - Breakfast at Cafeteria 37</h3>
                    <h3 className="content-attraction-schedule">12:00 - ARoS Museum</h3>
                    <h3 className="content-activity-schedule">16:15 - Øst for Paradis</h3>
                    <h3 className="content-place-schedule">19:30 - Dinner at Gaijin Ramen</h3>
                </div>
                <div className="friday-content">
                    <h2 className="date-schedule">Friday<br></br>18/11</h2>
                    <h3 className="content-place-schedule">11:00 - Juice Stop</h3>
                    <h3 className="content-attraction-schedule">12:00 - Den Gamle By</h3>
                    <h3 className="content-event-schedule">18:00 - Black Friday</h3>
                </div>
                <div className="saturday-content">
                    <h2 className="date-schedule">Saturday<br></br>19/11</h2>
                    {isPosts ? (
                        <div className="schedulemodule">
                            {posts.map((post) => (
                                <DateScheduleModule key={post.id} post={post}></DateScheduleModule>
                            ))}
                        </div>
                    ) : (
                        <p className="no-data">The added places will be shown here</p>
                    )}
                </div>
                <div className="sunday-content">
                    <h2 className="date-schedule">Sunday<br></br>20/11</h2>
                </div>
            </div>
            <BackButton />
        </main>

    )
}