import { createSlice } from "@reduxjs/toolkit";

const initialErrorState = {
  error: {
    message: "",
  },
};
const errorSlice = createSlice({
  name: "error",
  initialState: initialErrorState,
  reducers: {
    addError(state, action) {
      state.message = action.payload;
    },
  },
});
export const newErrorActions = errorSlice.actions;
export default errorSlice;
