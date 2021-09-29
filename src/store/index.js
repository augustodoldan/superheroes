import { configureStore } from "@reduxjs/toolkit";
import newTeamSlice from "./team-slice";
import errorSlice  from "./error-slice";

const store = configureStore({
  reducer: {team: newTeamSlice.reducer, error: errorSlice.reducer },
});

export default store;
  