const { createSlice } = require("@reduxjs/toolkit");

export const campaignSlice = createSlice({
    name: "campaigns",
    initialState: {
        campaigns: [],
        inputValues: {},
        isLoading: false,
        error: false,
    },
    reducers: {
        startLoading: state => {
            state.isLoading = true;
        },
        hasError: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        campaignsSuccess: (state, action) => {
            state.campaigns = action.payload;
            state.isLoading = false;
        },
        addCampaign: (state, action) => {
            state.inputValues = { ...state.inputValues, ...action.payload };
        },
    }
});
export const { startLoading, hasError, campaignsSuccess, addCampaign } = campaignSlice.actions;
export const selectListState = (state) => { return state.campaigns }
export const inputState = (state) => state.campaigns.inputValues

export default campaignSlice.reducer