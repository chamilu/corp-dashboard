import { configureStore, Tuple, combineReducers } from "@reduxjs/toolkit";

import creditGraphReducer from "./slices/graphSlice";

const rootReducer = combineReducers({
    creditGraph: creditGraphReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch