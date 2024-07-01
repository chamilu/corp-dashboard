import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

import { graphApi } from "../api/graphApi";
import { IGraphState } from "../interfaces";

export const fetchStockGraphData = createAsyncThunk<
    { data: string[] },
    { duration: string }
>("stock/fetchStockGraphData", async (params) => {
    return await graphApi.fetchStockGraphData(params);
});

const initialState: IGraphState = {
    graphData: [],
};

const stockGraphSlice = createSlice({
    name: "stockGraph",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStockGraphData.fulfilled, (state, { payload }) =>
                produce(state, (draft) => {
                    const d = payload.data.map((n, i) => ({
                        y: n,
                        x: i % 2 ? "01/25" : "", // TODO: Set months
                    }));

                    draft.graphData = d;
                }),
            )
            .addCase(fetchStockGraphData.rejected, (state) =>
                produce(state, (draft) => {
                    // TODO: Add data manipulation on rejected.
                }),
            );
    },
});

const { actions, reducer: stockGraphReducer } = stockGraphSlice;

export const {} = actions;
export default stockGraphReducer;
