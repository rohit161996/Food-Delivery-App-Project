import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import TopChain from './TopChain'
import { Link } from "react-router-dom";
import constants from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardOpen = withOpenLabel(RestaurantCard);
    const { setUserName } = useContext(UserContext);
    const { loggedInUser } = useContext(UserContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                constants.CORS_PLUGIN +
                encodeURIComponent(constants.BODY_URL)
            );
            const json = await data.json();
            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setListOfRestaurants(restaurants || []);
            setFilteredRestaurants(restaurants || []);
        } catch (err) {
            console.log("Error Fetching Foodingo data:", err);
        }
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return (<h1 className="font-bold text-center text-2xl p-4 m-4">Check Your Internet Connection!!!</h1>);

    return (listOfRestaurants.length === 0) ?
        (<Shimmer />) :
        (
            <div className="body">
                <div className="flex justify-center items-center">
                    {/* Search Bar */}
                    <div className="search m-4 p-4 flex items-center">
                        <input
                            className="border border-solid border-black p-2 rounded-xl"
                            type="text"
                            value={searchText}
                            data-testid="searchInput"
                            onChange={(e) => {
                                setSearchText(e.target.value);
                            }}
                        />
                        <button className="m-4 px-4 py-2 bg-green-200 flex items-center rounded-lg cursor-pointer hover:bg-green-400"
                            onClick={() => {
                                const filteredRestaurant = listOfRestaurants.filter(
                                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                );
                                setFilteredRestaurants(filteredRestaurant);
                            }}
                        >
                            Search
                        </button>
                    </div>

                    {/* Button to filter the restaturants */}
                    <div>
                        <button
                            className="m-4 px-4 py-2 bg-gray-200 flex items-center rounded-lg cursor-pointer hover:bg-gray-400"
                            onClick={() => {
                                const filteredList = listOfRestaurants.filter(
                                    (res) => res.info.avgRating > 4
                                );
                                setFilteredRestaurants(filteredList);
                            }}>
                            Top Rated Restaurants
                        </button>
                    </div>

                    {/* User Name Should Change on writing text in this Text Box */}
                    <div>
                        <label htmlFor="">
                            UserName :
                        </label>
                        <input type="text"
                            className="border border-black p-2 rounded-xl"
                            value={loggedInUser}
                            onChange={(event) => setUserName(event.target.value)} />
                    </div>
                </div>

                <div className="text-3xl font-extrabold mr-60 ml-60">
                    <TopChain />
                </div>

                {/* <div className="res-container flex flex-wrap mr-60 ml-60 pb-40"> */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mx-auto max-w-7xl pb-40">
                    {
                        filteredRestaurants.map((restaurant) => (
                            <Link
                                to={"/restaurants/" + restaurant.info.id}
                                key={restaurant.info.id}>
                                {/* Add open label */
                                    restaurant.info.isOpen ?
                                        <RestaurantCardOpen resData={restaurant} /> :
                                        <RestaurantCard resData={restaurant} />
                                }
                            </Link>
                        ))
                    }
                </div>
            </div>
        );
};

export default Body;