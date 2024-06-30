import axios from "axios";
import queryString from "query-string";
import { STOCK_GRAPH_DATA_URL } from "../constants/api";

interface GraphApi {
    fetchStockGraphData: (params: { duration: string }) => Promise<any>;
}

export const graphApi: GraphApi = {
    fetchStockGraphData: (params: { duration: string }) =>
        axios
            .get(`${STOCK_GRAPH_DATA_URL}?${queryString.stringify(params)}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            })
            .then((response) => response.data),
};
