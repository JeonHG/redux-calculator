import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "calculator";
const initialState = {
  errorMessage: "",
  inputValue: "",
  inputMode: true,
  outputValue: 0,
  parenthesesOpen: false,
  resultsList: [],
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
  setValues: (state, { payload }) => {
    payload.map(({ key, value }) => (state[key] = value));
  },
  setInputValue: (state, { payload }) => {
    state.inputValue = state.inputValue + payload;
  },
  erase: (state) => {
    state.inputValue = state.inputValue.slice(0, -1);
  },
  evaluate: (state) => {
    if (state.inputValue) {
      try {
        state.outputValue = eval(state.inputValue);
        state.resultsList = state.resultsList.concat({
          expression: state.inputValue,
          result: state.outputValue,
        });
      } catch (e) {
        state.errorMessage = e.message;
      }
    } else {
      state.outputValue = 0;
    }
  },
  toggleParenthesesOpen: (state) => {
    state.parenthesesOpen = !state.parenthesesOpen;
    if (state.parenthesesOpen) {
      state.inputValue = state.inputValue + "(";
    } else {
      state.inputValue = state.inputValue + ")";
    }
  },
  toggleInputMode: (state) => {
    state.inputMode = !state.inputMode;
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
