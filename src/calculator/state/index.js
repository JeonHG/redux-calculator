import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = 'calculator'
const initialState = {
  isLoading: false,
}


const reducers = {
  initState: () => initialState,
}

const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers
})

export const getState = (state) => state[SLICE_NAME]
export const actions = {
  ...slice.actions,
}

export default slice.reducer