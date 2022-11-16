import { useLocation } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { BackButton } from "../components/BackButton";
import { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import { Toaster } from "react-hot-toast";

export default function DescriptionPage() {

    const location = useLocation();
    const datapass = location.state
    console.log(datapass)

    const [card, setCard] = useState([])

    useEffect(() => {
        if (datapass) {
            setCard(datapass);
        }
      }, [datapass]);

      async function addPlace() {
          const url = "https://digital-agency-storage-default-rtdb.europe-west1.firebasedatabase.app/trip.json";
          const response = await fetch(url, {
              method: "POST", 
              body: JSON.stringify(card) 
          });
          const data = await response.json();
          console.log(data);
          toast.success('Added successfully!', {className: "toaster"})
      }

    return (
        <main>
            <Toaster className="toaster"
                position="bottom-center"
                reverseOrder={false}
                fontFamily='forma-djr-text'
            />
            <div className="container-description">
                <img className="img-description" src={datapass.datapass.image} alt="Event" />
                <h1 className="title-description">{datapass.datapass.title}</h1>
                <p className="address-description">{datapass.datapass.address}</p>
                <div className="shadow" id="shadow-description"></div>
            </div>
            <div className="text-desc-container">
                <p className="text-description">{datapass.datapass.description}</p>
            </div>
            <button onClick={addPlace} className="container-trips-2 descriptioncase">
                <h1>ADD TO YOUR TRIP</h1>
                <AddIcon></AddIcon>
            </button>
            <BackButton />
        </main>
    )
}