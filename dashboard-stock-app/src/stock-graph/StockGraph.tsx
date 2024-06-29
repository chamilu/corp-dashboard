import React, { ReactElement, useEffect } from "react";
import axios from "axios";

const StockGraph = (): ReactElement => {
    useEffect(() => {
        const getStockData = async () => {
            const res = await axios.get("http://localhost:5000/stock", {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            });
            console.log("stockData:", res.data);
        };

        getStockData();
    }, []);

    return (
        <div>
            <h1>Stock Graph</h1>
        </div>
    );
};

export default StockGraph;
