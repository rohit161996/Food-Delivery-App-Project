import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import RestaurantItemCategory from "./RestaurantItems/RestaurantItemCategory";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
                <h2 className="text-2xl font-bold">Cart</h2>
                <div className="w-6/12 m-auto">
                    <button
                        className="m-2 p-2 text-white sm:bg-amber-400 lg:bg-red-400 rounded cursor-pointer"
                        onClick={handleClearCart}
                    >
                        Clear Cart
                    </button>
                    {cartItems.length === 0 && <h2>Cart is Empty!! Add Items to your cart!</h2>}
                    <RestaurantItemCategory items={cartItems} />
                </div>
        </div>
    )
}

export default Cart;