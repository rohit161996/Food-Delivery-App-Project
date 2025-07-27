import { useDispatch } from "react-redux";
import constants from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";

const RestaurantItemCategory = ({ items, dummy }) => {

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div>
            {
                items.map((item) => (
                    <div
                        key={item.card.info.id}
                        data-testid="fooditems"
                        className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                    >
                        <div className="w-9/12">
                            <div className="py-2">
                                <span>
                                    {item.card.info.name}
                                </span>
                                <span>
                                    - Rs.
                                    {item.card.info.price
                                        ? item.card.info.price / 100
                                        : item.card.info.defaultPrice / 100}
                                </span>
                            </div>
                            <p className="text-xs text-gray-600">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            <div className="absolute">
                                <button
                                    className="p-2 mx-9 bg-green-900 text-white shadow-lg absolute mt-25 rounded-2xl cursor-pointer"
                                    onClick={() => handleAddItem(item)}
                                >
                                    Add+
                                </button>
                            </div>
                            <img src={constants.CDN_URL + item.card.info.imageId} className="w-30 h-30 rounded-2xl" />
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default RestaurantItemCategory;