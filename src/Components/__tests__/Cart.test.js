import { act } from "react";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { Header } from "../Header";
import { appStore } from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it('should load the Restaurant Menu Component\n\
     -> click the accordian for Recommended (20) from California Burito\n\
     -> Count the Items to be 20 as in the drop down menu', async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>
        )
    );

    /* Check the according items are proper in number or not */
    const accordianHeader = screen.getByText("Recommended (20)");
    fireEvent.click(accordianHeader);

    const items = screen.getAllByTestId("fooditems");
    expect(items.length).toBe(20);
});


it('Should Check the Header Component that the Cart Items are 0 Initially\n\
    -> the Check the Add + Button is Working or not More than Once on other Buttons or not?', async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <RestaurantMenu />
                    <Header />
                </Provider>
            </BrowserRouter>
        ));

    /* Accordian Items */
    const accordianClick = screen.getByText("Cali Burritos (16)");
    fireEvent.click(accordianClick);

    const items = screen.getAllByTestId("fooditems");
    expect(items.length).toBe(16);

    /* Before Clicking the Add + Button */
    const cartItems0 = screen.getByText(/Cart\s*\(\s*0\s*items\s*\)/i);
    expect(cartItems0).toBeInTheDocument();

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
});











