import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "calculator";
const initialState = {
  errorMessage: "",
  inputValue: "",
  inputMode: true,
  outputValue: 0,
  resultsList: [],
  cursorLocation: 0,
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
    const targetIndex = state.cursorLocation;
    let inputString = [
      ...state.inputValue.split("").slice(0, targetIndex),
      payload,
      ...state.inputValue.split("").slice(targetIndex),
    ].join("");
    state.inputValue = inputString;
  },
  erase: (state) => {
    const targetIndex = state.cursorLocation;
    let inputString = [
      ...state.inputValue.split("").slice(0, targetIndex - 1),
      ...state.inputValue.split("").slice(targetIndex),
    ].join("");
    state.inputValue = inputString;
  },
  evaluate: (state) => {
    if (state.inputValue) {
      try {
        const result = eval(state.inputValue);
        if (Number.isInteger(result)) {
          state.outputValue = parseInt(result);
        } else {
          state.outputValue = result.toFixed(3);
        }
        state.resultsList = state.resultsList.concat({
          expression: state.inputValue,
          result: state.outputValue,
        });
      } catch (e) {
        console.log(e);
        state.errorMessage = e.message;
      }
    } else {
      state.outputValue = 0;
    }
  },
  toggleInputMode: (state) => {
    state.inputMode = !state.inputMode;
  },
  updateCursor: (state, { payload }) => {
    state.cursorLocation = state.cursorLocation + payload;
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
