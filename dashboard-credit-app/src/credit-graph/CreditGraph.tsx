import "./credit-graph.scss";
import React, { ReactElement, useEffect, useState } from "react";
import { Card, Radio, Flex, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { fetchCreditGraphData } from "../app/slices/graphSlice";
import { AppDispatch } from "../app/store";
import { IState } from "../app/interfaces";

const { Text } = Typography;

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

const CreditGraph = (): ReactElement => {
    /**
     * Known warning issue with rechart
     * https://github.com/recharts/recharts/issues/3615
     */
    const [size, setSize] = useState("6M");

    const dispatch = useDispatch<AppDispatch>();
    const graphData = useSelector(
        (state: IState) => state.creditGraph.graphData,
    );

    const getCreditData = async (duration) => {
        dispatch(fetchCreditGraphData({ duration }));
    };

    useEffect(() => {
        getCreditData("6M");
    }, []);

    return graphData && graphData.length > 0 ? (
        <div>
            <Card
                title="Corporate Credit Performance"
                style={{
                    width: 720,
                    height: 410,
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    paddingLeft: 0,
                }}
                className={"cardCredit"}
            >
                <div style={{ marginBottom: 20 }} className="noDrag">
                    <Flex align="center" justify="end">
                        <Radio.Group
                            value={size}
                            onChange={(e) => {
                                setSize(e.target.value);
                                getCreditData(e.target.value);
                            }}
                        >
                            <Radio.Button value="6M">6M</Radio.Button>
                            <Radio.Button value="12M">12M</Radio.Button>
                            <Radio.Button value="3Y">3Y</Radio.Button>
                            <Radio.Button value="5Y">5Y</Radio.Button>
                        </Radio.Group>
                    </Flex>
                </div>

                <Flex justify="space-between">
                    <div className="graph">
                        <AreaChart
                            width={450}
                            height={250}
                            data={graphData}
                            margin={{
                                top: 0,
                                right: 15,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <defs>
                                <linearGradient
                                    id="creditGradient"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="5%"
                                        stopColor="#bfeced"
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="#bfeced"
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                            </defs>

                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                            />
                            <XAxis dataKey={"x"} tickSize={2} />
                            <YAxis width={40} />
                            <Tooltip />
                            <Area
                                dataKey={"y"}
                                type={"linear"}
                                stroke="#2ec2c4"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#creditGradient)"
                            />
                        </AreaChart>
                    </div>
                    <div className="graphInfo">
                        <Text>Weighted Bond MV Excess Returns</Text>
                        {graphData && graphData.length > 0 && (
                            <div className="value">
                                {graphData[graphData.length - 1].y} BP
                            </div>
                        )}
                    </div>
                </Flex>
            </Card>
        </div>
    ) : (
        <></>
    );
};

export default CreditGraph;
