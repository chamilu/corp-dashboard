import React, { ReactElement, useEffect } from "react";
import axios from "axios";

const CreditGraph = (): ReactElement => {
    useEffect(() => {
        const getCreditData = async () => {
            const res = await axios.get("http://localhost:5000/credit", {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            });
            console.log("creditData:", res.data);
        };

        getCreditData();
    }, []);

    return (
        <div>
            <h1>Credit Graph</h1>
        </div>
    );
};

export default CreditGraph;
