import React from "react";
import { Provider } from "react-redux";

import { store } from "../app/store";
import CreditGraph from "./CreditGraph";

const Graph = () => {
    return (
        <Provider store={store}>
            <CreditGraph />
        </Provider>
    );
};

export default Graph;
