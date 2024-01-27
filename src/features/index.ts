import { combineReducers } from "@reduxjs/toolkit";
import { jsearchApi, serpApi } from "../app/services";
import navReduceer from "./nav/navSlice";
import basketSlice from "./featuredRow/basketSlice";

const rootReducer = combineReducers({
  [serpApi.reducerPath]: serpApi.reducer,
  [jsearchApi.reducerPath]: jsearchApi.reducer,
  nav: navReduceer,
  basket: basketSlice,
});
export default rootReducer;
