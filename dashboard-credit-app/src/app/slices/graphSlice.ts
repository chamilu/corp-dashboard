import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

import { graphApi } from "../api/graphApi";
import { IGraphState } from "../interfaces";

export const fetchCreditGraphData = createAsyncThunk<
    { data: string[] },
    { duration: string }
>("credit/fetchCreditGraphData", async (params) => {
    return await graphApi.fetchCreditGraphData(params);
});

const initialState: IGraphState = {
    graphData: [],
};

const creditGraphSlice = createSlice({
    name: "creditGraph",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCreditGraphData.fulfilled, (state, { payload }) =>
                produce(state, (draft) => {
                    console.log("payload :>> ", payload);
                    const d = payload.data.map((n, i) => ({
                        y: n,
                        x: i % 2 ? "01/25" : "",
                    }));

                    draft.graphData = d;
                }),
            )
            .addCase(fetchCreditGraphData.rejected, (state) =>
                produce(state, (draft) => {
                    // TODO: Add data manipulation on rejected.
                }),
            );
    },
});

const { actions, reducer: creditGraphReducer } = creditGraphSlice;

export const {} = actions;
export default creditGraphReducer;
