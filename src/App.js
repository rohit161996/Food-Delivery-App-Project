import { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Header } from './Components/Header';
import Body from './Components/Body';
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Cart from "./Components/Cart";
import RestaurantMenu from "./Components/RestaurantMenu";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import { useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

    const [userName, setUserName] = useState();
    useEffect(() => {
        const data = {
            name: "Rohit Ramchandani"
        };
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="min-h-screen flex flex-col">
                    <Header />
                    <main className="flex-grow">
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element:
                    <About />
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h2 className="text-center text-xl p-4">The Grocery Page is Loading!!!</h2>}>
                    <Grocery />
                </Suspense>,
            },
            {
                path: "/cart",
                element: <Cart />,
            }
        ],
        errorElement: <Error />,
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

