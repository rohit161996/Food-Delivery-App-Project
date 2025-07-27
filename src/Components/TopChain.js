import { useState,useEffect } from "react";
import constants from "../utils/constants";

const TopChain = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch( 
                constants.CORS_PLUGIN + 
                encodeURIComponent(constants.BODY_URL));
            const json = await data.json();
            const restaurants = json.data.cards[1].card.card.header.title;
            setListOfRestaurants(restaurants || []);
        } catch (err) {
            console.log("Error Fetching Foodingo data:", err);
        }
    };

    return (listOfRestaurants.length === 0) ? (<h1><strike>Top Chain Not Available</strike></h1>) : (
        <div className="topchain">
                <h3>{listOfRestaurants}</h3>
        </div>
    );
}

export default TopChain;
