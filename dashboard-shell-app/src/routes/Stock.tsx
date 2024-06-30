import React from "react";

const StockGraph = React.lazy(() => import("StockApp/StockGraph"));

const StockView = () => {
    return (
        <div>
            <StockGraph />
        </div>
    );
};

export default StockView;
