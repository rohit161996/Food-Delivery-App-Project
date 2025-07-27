
import { render, screen } from "@testing-library/react";
import RestaurantCard, { withOpenLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

/* Check if the name of the restaurant is present in the Card via text or not? */
it('should render RestaurantCard component with props data', () => {

  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("McDonald's");
  expect(name).toBeInTheDocument();

});

/*
 * Define the test case

 * Step 1: Apply the HOC (Higher Order Component)
 * `withOpenLabel` is a function that takes a component (RestaurantCard)
 * and returns a new component with an "Open" label added.
 * 
 * Step 2: Render the new component returned by HOC
 * We pass the required props (`resData`) while rendering
 * so it behaves like the original `RestaurantCard` but with extra "Open" label
 * 
 * Step 3: Search for the label "Open" in the rendered output
 * `getByText` looks for exact match by default.
 * 
 * Step 4: Verify that the "Open" label is indeed present in the DOM
 * This confirms the HOC successfully wrapped the card and added the label
 * 
 */
it("should render RestaurantCard component with Open label", () => {

  const RestaurantCardWithLabel = withOpenLabel(RestaurantCard);
  render(<RestaurantCardWithLabel resData={MOCK_DATA} />);

  const label = screen.getByText("Open");
  expect(label).toBeInTheDocument();
});

