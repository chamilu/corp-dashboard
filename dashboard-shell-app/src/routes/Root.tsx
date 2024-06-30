import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import React from "react";
import GridLayout from "react-grid-layout";

const StockGraph = React.lazy(() => import("StockApp/StockGraph"));
const CreditGraph = React.lazy(() => import("CreditApp/CreditGraph"));

const RootView = () => {
    const layout = [
        { i: "stock-g", x: 0, y: 0, w: 1, h: 1 },
        { i: "credit-g", x: 1, y: 0, w: 1, h: 1 },
    ];

    return (
        <GridLayout
            className="gridLayout"
            draggableCancel=".noDrag"
            layout={layout}
            cols={2}
            rowHeight={410}
            width={1460}
            maxRows={1}
            compactType="horizontal"
            isResizable={true}
            onLayoutChange={(layout) =>
                // TODO: Save layout data
                console.log("savelayour", layout)
            }
            margin={[20, 20]}
            containerPadding={[0, 0]}
        >
            <div key={"stock-g"} className="graphs">
                <StockGraph />
            </div>
            <div key={"credit-g"} className="graphs">
                <CreditGraph />
            </div>
        </GridLayout>
    );
};

export default RootView;
