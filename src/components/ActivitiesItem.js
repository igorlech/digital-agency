import { Link } from "react-router-dom"
import useCheckImage from "../utils/checkUrl";

export default function ActivitiesItem({activity}){

    const datapass = {
        title: activity.Name,
        address: activity.Address.AddressLine1,
        image: activity.Files.length > 0 && activity.Files[0].Uri,
        description: activity.Descriptions.length > 0 && activity.Descriptions[0].Text,
    }

    return (
        <Link to="/description" state={{datapass}}>
            <div className="container-cards-categories">
                <div className="categoryitem-name">{activity.Name}</div>
                <img className="categoryitem-img"
                     src={useCheckImage(activity.Files) ? activity.Files.find(img => img.uri !== null) ? activity.Files.find(img => img.uri !== null).Uri : '../placeholder.jpg' : '../placeholder.jpg'}
                     alt={activity.Name}
                />
            </div>
        </Link>
)}