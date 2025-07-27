import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../../Components/Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

/* 
 *   1. Writing our own fetch function (mocking the fetch function)
 *   
 *   2. Since the fetch function returns a promise 
 *   so we will be returning a Promise.resolve()
 *   
 *   3. It resolves with a json, so resolve json : ()=>{}
 *   json function resolves a promise and get the 
 *   data i.e. return Promise.resolve(MOCK_DATA);
 * 
 */
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it('Should render the Body Component with Search Button with role', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const searchBtn = screen.getByRole("button", { name: "Search" });
    expect(searchBtn).toBeInTheDocument();

});

it('Should render the Body Component with Search Button with Text', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const searchBtn = screen.getByText("Search");
    expect(searchBtn).toBeInTheDocument();

});

/**
  *  Get the Text written in the searchInput Box
  *  Change the text in the input box using the fire event
  *  Get the button on the Body Component By Role
  *  Click the Button using the fire component
  *  Screen should load a card
  *
  */
it('Should change the input box in the Body Component', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    /* Cards before the Search = 8 */
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(8);

    /* Getting the search input on the basis of placeholder, text written or TestId */
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "Big Bowl" } });

    /* Now click the button on the screen by getting through role and clicking*/
    const submitButton = screen.getByRole("button", { name: "Search" });
    fireEvent.click(submitButton);

    /* Get the Cards using the TestId */
    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(1);
});

/*
 *  Get the button on the Body Component By Role
 *  Click the Button using the fire component
 *  Screen should load a card
 */
it('Should filter the Top Rated Restaurant', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    /* Cards before the Search = 8 */
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(8);

    /* Now click the button on the screen by getting through role and clicking*/
    const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
    fireEvent.click(topRatedBtn);

    /* Cards after the search are 7 */
    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(7);
});


