import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedButton: "Tom de voz",
  selectedRadio: 'Formal'
};

export const tabPanelSlice = createSlice({
  name: 'tabPanel',
  initialState,
  reducers: {
    setSelectedButton: (state, action) => {
      state.selectedButton = action.payload;
    },
    setSelectedRadio: (state, action) => {
      state.selectedRadio = action.payload;
    },
  },
});

export const { setSelectedButton, setSelectedRadio } = tabPanelSlice.actions;
export default tabPanelSlice.reducer;
