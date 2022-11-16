import React, {useEffect, useState} from 'react'
import ActivitiesItem from "../components/ActivitiesItem";
import getData from "../utils/getData";
import {CircularProgress} from "@mui/material";
import logo from "../img/logo.png"
import PaginationBox from "../components/Pagination";
import Filter from "../components/Filter";
import { BackButton } from '../components/BackButton';

export default function Activities() {
    const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/categories/activities.json";

    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);
    const pageSize = 10;

    useEffect(() => {
        getData({url: url, setData: setActivities, setLoading})
    }, []);

    return (
        <main>
            <section>
                <img className="logo" src={logo} alt="Visit Denmark"></img>
            </section>
            <div className='events-top'>
                <h2 className='title-pages'>ACTIVITIES</h2>
            </div>
            <Filter
                setPageNumber={setPageNumber}
                setData={setActivities}
                setLoading={setLoading}
                url={url}
            />
            <section className='container-page-events'>
                {
                    loading ? <CircularProgress/> :
                        activities.slice((pageNumber - 1) * pageSize, (pageNumber * pageSize)).map(activity => (
                            <ActivitiesItem activity={activity} key={activity.id}/>)
                        )
                }
            </section>
            <PaginationBox
                loading={loading}
                setPageNumber={setPageNumber}
                length={activities.length}
                pageSize={pageSize}
                pageNumber={pageNumber}
            />
            <BackButton />
        </main>
    )
}