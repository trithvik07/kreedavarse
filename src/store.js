import { configureStore, createSlice } from "@reduxjs/toolkit";

const addItemToArray = (state, action) => {
    state.score.push(action.payload)
  }

const userSlice = createSlice({
  name: "score",
  initialState: {score:[]},
  reducers: {
    addscore:addItemToArray
  },
});






export const userActions = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});