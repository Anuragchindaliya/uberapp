import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        console.warn("Can't remove product id ", action);
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectBasketItem = (state: RootState) => state.basket.items;

export const selectBasketItemWithId = (state: RootState, id: number) =>
  state.basket.items.filter((item) => item.id === id);

export const selectBasketTotal = (state: RootState) =>
  state.basket.items.reduce((total, row) => (total += row.price), 0);
export default basketSlice.reducer;
