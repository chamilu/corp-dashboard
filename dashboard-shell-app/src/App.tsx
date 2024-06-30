import "./index.scss";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import React from "react";
import GridLayout from "react-grid-layout";
import { Typography, Input } from "antd";
const { Title, Text } = Typography;
import { LineChartOutlined } from "@ant-design/icons";
const { Search } = Input;

const StockGraph = React.lazy(() => import("StockApp/StockGraph"));
const CreditGraph = React.lazy(() => import("CreditApp/CreditGraph"));

const App = () => {
    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 1 },
        { i: "b", x: 1, y: 0, w: 1, h: 1 },
    ];

    return (
        <div className="wrapper">
            <div className="header">
                <div className="title">
                    <Title level={3}>MSFT - Microsoft Corporation</Title>
                    <Text>United States | Information Technology</Text>
                </div>
                <div className="search">
                    <Search
                        placeholder="Search Company"
                        onSearch={() => {}}
                        style={{ width: 400 }}
                    />
                </div>
            </div>
            <div className="gridWrapper">
                <div className="gridTitle">
                    <Title level={4}>
                        <div className="iconWrapper">
                            <LineChartOutlined className="pIcon" />
                        </div>{" "}
                        PERFORMANCE
                    </Title>
                </div>
                <GridLayout
                    className="gridLayout"
                    draggableCancel=".noDrag"
                    layout={layout}
                    cols={2}
                    rowHeight={410}
                    width={1460}
                    maxRows={1}
                    compactType="horizontal"
                    onLayoutChange={(layout) =>
                        console.log("savelayour", layout)
                    }
                    margin={[20, 20]}
                    containerPadding={[0, 0]}
                >
                    <div key={"a"} className="graphs">
                        <StockGraph />
                    </div>
                    <div key={"b"} className="graphs">
                        <CreditGraph />
                    </div>
                </GridLayout>
            </div>
        </div>
    );
};

export default App;
