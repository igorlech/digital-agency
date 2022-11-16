import {DateRange} from "react-date-range"
import { useState } from "react";
import {Link} from "react-router-dom";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import logo from "../img/logo.png";
import { BackButton } from '../components/BackButton';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function YourTripPage() {

    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
      
    return (
        <main>
            <section>
                <img src={logo} className="logo" alt="visitDenmark" />
            </section>
            <section>
                <div className="container-trips-1 edittrip">
                    <h1>FAMILY TRIP</h1>
                    <DriveFileRenameOutlineIcon />
                </div>
                <div className="container-text-yourtrip">
                    <h2 className="text-yourtrip">Choose the dates for your trip:</h2>
                </div>
                <div className="datepicker">
                    <DateRange
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state} />
                </div>
                <div className="time-placeholder">
                    <h2 className="time-placeholder-inner">Choose the time: 14:30</h2>
                </div>
                <Link to="/schedule" className="container-trips-2">
                <h1>LET'S GO</h1>
                <NavigateNextIcon></NavigateNextIcon>
            </Link>
            </section>
            <BackButton />
        </main>
    )
}