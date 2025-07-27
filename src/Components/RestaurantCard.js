import constants from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        areaName,
        costForTwo
    } = resData?.info;

    return (
        <div
            data-testid="resCard"
            className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 h-full flex flex-col justify-between">
                <img className="rounded-lg w-[250px]"
                    alt="res-logo"
                    src={
                        constants.CDN_URL + cloudinaryImageId} />
                <div className="res-content">
                    <h3 className="font-bold py-4 text-l">{name}</h3>
                    <h4 className="pl-2">{avgRating}</h4>

                    {/* Array's function to arrange the number with , */}
                    <h4 className="pl-2">{cuisines.join(",")}</h4>
                    <p className="pl-2">{areaName}</p>
                    <p className="pl-2">{costForTwo}</p>
                </div>
        </div>
    );
};

export const withOpenLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="h-full flex flex-col justify-between">
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Open
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    }
}
export default RestaurantCard;