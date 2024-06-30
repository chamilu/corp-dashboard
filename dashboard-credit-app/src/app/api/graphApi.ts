import axios from "axios";
import queryString from "query-string";
import { CREDIT_GRAPH_DATA_URL } from "../constants/api";

interface GraphApi {
    fetchCreditGraphData: (params: { duration: string }) => Promise<any>;
}

export const graphApi: GraphApi = {
    fetchCreditGraphData: (params: { duration: string }) =>
        axios
            .get(`${CREDIT_GRAPH_DATA_URL}?${queryString.stringify(params)}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            })
            .then((response) => response.data),
};
