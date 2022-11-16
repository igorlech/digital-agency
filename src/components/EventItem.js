import {Link} from "react-router-dom"
import useCheckImage from "../utils/checkUrl";

export default function EventItem({event}) {

    const datapass = {
        title: event.Name,
        address: event.Address.AddressLine1,
        image: event.Files.length > 0 && event.Files[0].Uri,
        description: event.Descriptions.length > 0 && event.Descriptions[0].Text,
    }

    return (
        <Link to="/description" state={{datapass}}>
            <div className="container-cards-categories">
                <article className="categoryitem-name">{event.Name}</article>
                <img className="categoryitem-img"
                     src={useCheckImage(event.Files) ? event.Files.find(img => img.uri !== null) ? event.Files.find(img => img.uri !== null).Uri : '../placeholder.jpg' : '../placeholder.jpg'}
                     alt={event.Name}/>
                <div className="shadow"></div>
            </div>
        </Link>
    )
}