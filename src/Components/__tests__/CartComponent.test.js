import { act } from "react";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { Header } from "../Header";
import { appStore } from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../../Components/Cart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})


it('Should check the Cart Component that the Cart Items are Added in the Cart Component or Not?', async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <RestaurantMenu />
                    <Cart />
                    <Header/>
                </Provider>
            </BrowserRouter>
        )
    );

    const accordianClick = screen.getByText("*New* HealthifyMe X California Burrito (4)");
    fireEvent.click(accordianClick);

    const items = screen.getAllByTestId("fooditems");
    expect(items.length).toBe(4);

    /* Click Event */
    const addBtnClick = screen.getAllByRole("button", { name: "Add +" });

    /* Click Button Once and Check Cart Items Size*/
    fireEvent.click(addBtnClick[0]);
    const cartItems1 = screen.getByText(/Cart\s*\(\s*1\s*items\s*\)/i);
    expect(cartItems1).toBeInTheDocument();

    /* Click Button Twice and Check Cart Items Size*/
    fireEvent.click(addBtnClick[1]);
    const cartItems2 = screen.getByText(/Cart\s*\(\s*2\s*items\s*\)/i);
    expect(cartItems2).toBeInTheDocument();

    /* Click Button Thrice and Check Cart Items Size*/
    fireEvent.click(addBtnClick[2]);
    const cartItems3 = screen.getByText(/Cart\s*\(\s*3\s*items\s*\)/i);
    expect(cartItems3).toBeInTheDocument();

    /* Total 4 Items from the Accordian and 3 Items from the Cart Component */
    expect(screen.getAllByTestId("fooditems").length).toBe(7);

    /* Clear Cart Button Click and the Items should be 20 as before the Cart Component and only from the Accordian*/
    const clearCart = screen.getByRole("button", { name: "Clear Cart" });
    fireEvent.click(clearCart);

    expect(screen.getAllByTestId("fooditems").length).toBe(4);
});
