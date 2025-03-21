import { createBrowserRouter } from "react-router";
import {Home, Cart, Checkout, Product, Login, Register } from "./pages"

const routes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/product/:id",
        element: <Product/>
    },
    {
        path: "/cart",
        element: <Cart/>
    },
    {
        path: "/checkout",
        element: <Checkout/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    }
];

const router = createBrowserRouter(routes);

export default router;