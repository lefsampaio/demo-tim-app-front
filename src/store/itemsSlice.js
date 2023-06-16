import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        isLoading: false,
        isChecked: false,
        generatedContent: [],
    },
    reducers: {
        startLoading: state => {
            state.isLoading = true;
        },
        setGeneratedContent: (state, action) => {
            state.generatedContent = action.payload
            state.isLoading = false;
        },
        toggleCheckbox: (state, action) => {
            const itemId = action.payload;
            if (state.generatedContent.generatedContent[itemId]) {
                state.generatedContent.generatedContent[itemId].isChecked = !state.generatedContent.generatedContent[itemId].isChecked;
            }
        },
        deleteItem: (state, action) => {
            const itemId = action.payload;
            delete state.generatedContent.generatedContent[itemId];
        },
    },
});
export const { toggleCheckbox, deleteItem, setGeneratedContent, startLoading } = itemsSlice.actions;
export const generatedList = (state) => state.items.generatedContent;

export default itemsSlice.reducer;