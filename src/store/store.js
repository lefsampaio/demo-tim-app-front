import { configureStore } from "@reduxjs/toolkit";
import { dialogSlice } from "./dialogSlice";
import { stepSlice } from "./stepSlice";
import { createWrapper } from "next-redux-wrapper";
import { openSlice } from "./openSlice";
import { campaignSlice } from "./campaignSlice";
import { selectTabSlice } from "./selectTabSlice";


const makeStore = () =>
    configureStore({
        reducer: {
            [openSlice.name]: openSlice.reducer,
            [dialogSlice.name]: dialogSlice.reducer,
            [stepSlice.name]: stepSlice.reducer,
            [campaignSlice.name]: campaignSlice.reducer,
            [selectTabSlice.name]: selectTabSlice.reducer,
        },
        devTools: true,
    });


export const wrapper = createWrapper(makeStore);