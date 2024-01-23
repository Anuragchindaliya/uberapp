import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};
type NavType = {
  origin: any;
  destination: any;
  travelTimeInformation: any;
};
export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

//selectors
export const { setDestination, setOrigin, setTravelTimeInformation } =
  navSlice.actions;
export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectTravelTimeInformation = (state: RootState) =>
  state.nav.destination;

const navReduceer = navSlice.reducer;
export default navReduceer;
