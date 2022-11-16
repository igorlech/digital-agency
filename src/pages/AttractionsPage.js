import React, {useEffect, useState} from 'react'
import AttractionsItem from "../components/AttractionsItem.js";
import getData from "../utils/getData";
import {CircularProgress} from "@mui/material";
import logo from "../img/logo.png"
import PaginationBox from "../components/Pagination";
import Filter from "../components/Filter";
import { BackButton } from '../components/BackButton';

export default function AttractionsPage() {
    const [attractions, setAttractions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);
    const pageSize = 10;

    const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/categories/attractions.json";

    useEffect(() => {
        getData({url, setData: setAttractions, setLoading})
    }, []);

    return (
        <main>
            <section>
                <img className="logo" src={logo} alt="Visit Denmark"></img>
            </section>
            <div className='events-top'>
                <h2 className='title-pages'>ATTRACTIONS</h2>
            </div>
            <Filter
                setPageNumber={setPageNumber}
                setData={setAttractions}
                setLoading={setLoading}
                url={url}
            />
            <section className='container-page-events'>
                {
                    loading ? <CircularProgress/> :
                        attractions.slice((pageNumber - 1) * pageSize, (pageNumber * pageSize)).map(attraction => (
                            <AttractionsItem attraction={attraction} key={attraction.id}/>))
                }
            </section>
            <PaginationBox
                loading={loading}
                setPageNumber={setPageNumber}
                length={attractions.length}
                pageSize={pageSize}
                pageNumber={pageNumber}
            />
            <BackButton />
        </main>
    )
}