import axios from "axios";
import { useEffect, useState } from "react";

function useApi (url) {

    const [data, setData] = useState([]);

useEffect(() => {
    const getData= () => {
        return axios.get(url)
        .then((response)=> setData(response.data))
        .catch( (error)=> {console.error(error)})
    };
     getData(); 
}, [url]); 
return data; }; 


export default useApi;
