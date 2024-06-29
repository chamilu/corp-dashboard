import React, { Suspense } from "react";

const StockGraph = React.lazy(() => import("StockApp/StockGraph"));
const CreditGraph = React.lazy(() => import("CreditApp/CreditGraph"));

const App = () => {
    return (
        <div>
            <h1>This is Shell App</h1>
            <Suspense fallback={<div>loading...</div>}>
                <StockGraph />
                <CreditGraph />
            </Suspense>
        </div>
    );
};

export default App;
