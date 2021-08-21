import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "calculator";
const initialState = {
  isLoading: false,
  inputValue: "",
  outputValue: 0,
};

const reducers = {
  initState: () => initialState,
  setValue: {
    reducer: (state, { payload: { key, value } }) => {
      state[key] = value;
    },
    prepare: (key, value) => {
      return { payload: { key, value } };
    },
  },
  setInputValue: (state, { payload }) => {
    state.inputValue = state.inputValue + payload;
  },
  evaluate: (state) => {
    if (state.inputValue) {
      state.outputValue = eval(state.inputValue);
    } else {
      state.outputValue = 0;
    }
  },
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers,
});

export const getState = (state) => state[SLICE_NAME];
export const actions = {
  ...slice.actions,
};

export default slice.reducer;
