import ThemeContext from "../../context/ThemeContext";
import {useContext} from "react";

const MainLayout = ({children}) => {
    const theme = useContext(ThemeContext)

    return (
        <>
            {children}
        </>
    )
}

export default MainLayout