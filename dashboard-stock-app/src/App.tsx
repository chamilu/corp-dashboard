import React, { ReactElement } from "react";

import StockGraph from "./stock-graph/StockGraph";

const App = () => {
    return (
        <div>
            <h1>This is Stock App</h1>
            <StockGraph />
        </div>
    );
};

export default App;
