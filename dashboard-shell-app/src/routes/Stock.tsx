import React, { Suspense } from "react";

const StockGraph = React.lazy(() => import("StockApp/StockGraph"));

const StockView = () => {
    return (
        <div>
            <Suspense>
                <StockGraph />
            </Suspense>
        </div>
    );
};

export default StockView;
