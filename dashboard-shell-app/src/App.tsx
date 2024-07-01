import "./index.scss";

import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootView from "./routes/Root";
import StockView from "./routes/Stock";
import CreditView from "./routes/Credit";
import Layout from "./Layout";

const App = () => {
    // TODO: add error page.
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <RootView />,
                },
                {
                    path: "/stock",
                    element: <StockView />,
                },
                {
                    path: "/credit",
                    element: <CreditView />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;
