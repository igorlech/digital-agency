import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate} from "react-router-dom";

export const BackButton = () => {
    let navigate = useNavigate();
    return (
        <>
          <button className="backbutton" onClick={() => navigate(-1)}><KeyboardBackspaceIcon sx={{ fontSize: "2.5rem", color: "#022B52" }} /></button> 
        </>
    );
};