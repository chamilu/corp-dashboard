import React from "react";

const CreditGraph = React.lazy(() => import("CreditApp/CreditGraph"));

const CreditView = () => {
    return (
        <div>
            <CreditGraph />
        </div>
    );
};

export default CreditView;
