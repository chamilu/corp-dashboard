import "./index.scss";

import React from "react";
import { Typography, Input } from "antd";
const { Title, Text } = Typography;
import { LineChartOutlined } from "@ant-design/icons";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const { Search } = Input;

import RootView from "./routes/Root";
import StockView from "./routes/Stock";
import CreditView from "./routes/Credit";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootView />,
        },
        {
            path: "/stock",
            element: <StockView />,
        },
        {
            path: "/credit",
            element: <CreditView />,
        },
    ]);

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
                        </div>
                        PERFORMANCE
                    </Title>
                </div>

                <div>
                    <RouterProvider router={router} />
                </div>
            </div>
        </div>
    );
};

export default App;
