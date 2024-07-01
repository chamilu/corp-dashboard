import React from "react";
import { Provider } from "react-redux";

import { store } from "../app/store";
import StockGraph from "./StockGraph";

const Graph = () => {
    return (
        <Provider store={store}>
            <StockGraph />
        </Provider>
    );
};

export default Graph;
