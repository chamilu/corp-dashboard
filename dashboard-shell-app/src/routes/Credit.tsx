import React, { Suspense } from "react";

const CreditGraph = React.lazy(() => import("CreditApp/CreditGraph"));

const CreditView = () => {
    return (
        <div>
            <Suspense>
                <CreditGraph />
            </Suspense>
        </div>
    );
};

export default CreditView;
