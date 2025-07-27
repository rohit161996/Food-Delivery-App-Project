import { useEffect, useState } from "react";
import constants from "./constants";

const useRestaurantMenu = (resId) => {
    const[resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            constants.CORS_PLUGIN + 
            constants.URL + 
            resId + 
            constants.REMAINING_URL
        );
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;