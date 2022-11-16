import {Link} from "react-router-dom"
import useCheckImage from "../utils/checkUrl";

export default function AttractionsItem({attraction}) {

    const datapass = {
        title: attraction.Name,
        address: attraction.Address.AddressLine1,
        image: attraction.Files.length > 0 && attraction.Files[0].Uri,
        description: attraction.Descriptions.length > 0 && attraction.Descriptions[0].Text,
    }

    return (
        <Link to="/description" state={{datapass}}>
            <div className="container-cards-categories">
                <article className="categoryitem-name">{attraction.Name}</article>
                <img className="categoryitem-img"
                     src={useCheckImage(attraction.Files) ? attraction.Files.find(img => img.uri !== null) ? attraction.Files.find(img => img.uri !== null).Uri : '../placeholder.jpg' : '../placeholder.jpg'}
                     alt={attraction.Name}/>
            </div>
        </Link>
    )
}