import { createSlice } from '@reduxjs/toolkit'
export const campaignSlice = createSlice({
  name: 'campaigns',
  initialState: {
    campaigns: [],
    inputValues: {}, // Certifique-se de que o inputValues esteja definido como um objeto vazio
    isLoading: false,
    error: false,
    timelineData: {},
    isSaved: false,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true
    },
    hasError: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    campaignsSuccess: (state, action) => {
      state.campaigns = action.payload
      state.isLoading = false
    },
    addCampaign: (state, action) => {
      state.inputValues = { ...state.inputValues, ...action.payload }
    },
    saveParameters: (state) => {
      const { inputValues } = state
      const timelineData = {
        name: inputValues.name || '',
        campaignChannel: inputValues.campaignChannel || '',
        toneVoice: inputValues.toneVoice || '',
        creativityTemperature: inputValues.creativityTemperature || undefined,
        characterLimit: inputValues.characterLimit || undefined,
        paragraphs: inputValues.paragraphs || undefined,
        playground: inputValues.playground || '',
        targetAudience: inputValues.targetAudience || '',
        keyWords: inputValues.keyWords || '',
        mentalTriggers: inputValues.mentalTriggers || [],
        link: inputValues.link || '',
        useEmojis: inputValues.useEmojis,
        hashtag: inputValues.hashtag || '',
        author: 'Leticia Sampaio',
      }
      state.timelineData = timelineData
      state.isSaved = true
    },
  },
})

export const {
  startLoading,
  hasError,
  campaignsSuccess,
  addCampaign,
  saveParameters,
} = campaignSlice.actions

export const selectListState = (state) => {
  return state.campaigns
}

export const inputState = (state) => state.campaigns.inputValues

export default campaignSlice.reducer
