import React from "react";
import { Typography, Input, Flex, Space, Divider } from "antd";
const { Title, Text } = Typography;
import { LineChartOutlined } from "@ant-design/icons";
import { Outlet, Link } from "react-router-dom";

const { Search } = Input;

const Layout = () => {
    return (
        <div className="wrapper">
            <div className="breadcrumb">
                <Text>
                    <Space split={<Divider type="vertical" />}>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/credit"}>Credit</Link>
                        <Link to={"/stock"}>Stock</Link>
                    </Space>
                </Text>
            </div>

            <div className="header">
                <Flex justify="space-between" align="center">
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
                </Flex>
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
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
