import {useState} from "react";

const useCheckImage = (files) => {
    const [response, setResponse] = useState(false)
    if (files.length > 0 && files.find(img => img.uri !== null)) {
        let request = new XMLHttpRequest();
        request.open("GET", files.find(img => img.uri !== null).Uri, true);
        request.send();
        request.onload = function () {
            if (request.status == 200) //if(statusText == OK)
            {
                setResponse(true)
            } else if (request.status == 404) {
                setResponse(false)
            }
        }
    }
    return response

}

export default useCheckImage