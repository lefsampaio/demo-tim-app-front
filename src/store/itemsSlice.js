import { createSlice } from '@reduxjs/toolkit'

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    loading: false,
    isChecked: false,
    generatedContent: [],
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true
    },
    setGeneratedContent: (state, action) => {
      state.generatedContent = action.payload
      state.loading = false
    },
    toggleCheckbox: (state, action) => {
      const itemId = action.payload
      if (state.generatedContent.generatedContent[itemId]) {
        state.generatedContent.generatedContent[itemId].isChecked =
          !state.generatedContent.generatedContent[itemId].isChecked
      }
    },
    deleteItem: (state, action) => {
      const itemId = action.payload
      delete state.generatedContent.generatedContent[itemId]
    },
  },
})
export const { toggleCheckbox, deleteItem, setGeneratedContent, startLoading } =
  itemsSlice.actions
export const generatedList = (state) => state.items
export default itemsSlice.reducer
