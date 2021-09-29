import { createSlice } from "@reduxjs/toolkit";

const initialTeamState = {
  team: [],
};

const newTeamSlice = createSlice({
  name: "team",
  initialState: initialTeamState,
  reducers: {
    addHero(state, action) {
      state.team = state.team.concat(action.payload);
    },
    deleteHero(state, action) {
      state.team.splice(action.payload, 1);
    },
  },
});

export const newTeamActions = newTeamSlice.actions;
export default newTeamSlice;
