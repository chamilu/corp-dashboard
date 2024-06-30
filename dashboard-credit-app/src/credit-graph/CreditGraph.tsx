import "./credit-graph.scss";
import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import { Card, Radio, Flex, Typography } from "antd";

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
    const [size, setSize] = useState("6M");
    const [graphData, setGraphData] = useState<{ y: number; x: string }[]>([]);
    // https://github.com/recharts/recharts/issues/3615

    useEffect(() => {
        const getCreditData = async () => {
            try {
                const res = await axios.get("http://localhost:5000/credit", {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                    },
                });
                console.log("creditData:", res.data);
            } catch (error) {
                // api failed.
            }
        };

        const d = [13, 13, 32, 34, 45, 36, 44, 34, 55, 44, 16, 34].map(
            (n, i) => ({
                y: n,
                x: i % 2 ? "01/25" : "",
            }),
        );

        setGraphData(d);

        // getCreditData();
    }, []);

    return (
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
                                console.log(
                                    "e.target.value :>> ",
                                    e.target.value,
                                );
                                setSize(e.target.value);
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
                        <div className="value">456 BP</div>
                    </div>
                </Flex>
            </Card>
        </div>
    );
};

export default CreditGraph;
