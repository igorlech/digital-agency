import React, {useEffect, useState} from 'react'
import EventItem from "../components/EventItem.js";
import getData from "../utils/getData";
import {CircularProgress} from "@mui/material";
import logo from "../img/logo.png";
import Filter from "../components/Filter";
import PaginationBox from "../components/Pagination";
import { BackButton } from '../components/BackButton';

export default function EventsPage() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);
    const pageSize = 10;

    const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/categories/events.json";

    useEffect(() => {
        getData({url: url, setData: setEvents, setLoading})
    }, []);

    return (
        <main>
            <section>
                <img className="logo" src={logo} alt="Visit Denmark"></img>
            </section>
            <div className="events-top">
                <h2 className='title-pages'>EVENTS</h2>
            </div>
            <Filter
                setPageNumber={setPageNumber}
                setData={setEvents}
                setLoading={setLoading}
                url={url}
            />
            <section className='container-page-events'>
                {
                    loading ? <CircularProgress/> :
                        events.slice((pageNumber - 1) * pageSize, (pageNumber * pageSize)).map(event => (
                            <EventItem event={event} key={event.id}/>))
                }
            </section>
            <PaginationBox
                loading={loading}
                setPageNumber={setPageNumber}
                length={events.length}
                pageSize={pageSize}
                pageNumber={pageNumber}
            />
            <BackButton />
        </main>
    )
}