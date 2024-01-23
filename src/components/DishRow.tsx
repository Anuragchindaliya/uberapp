import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { DishType } from "../features/featuredRow/RestaurantCard";
import { FontAwesome } from "@expo/vector-icons";
import CurrencyFormat from "react-currency-format";
import { useAppDispatch, useAppSelector } from "../app/hook";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemWithId,
} from "../features/featuredRow/basketSlice";
const DishRow = (props: DishType) => {
  const { short_description, id, image, name, price } = props;
  const [isPressed, setPressed] = useState(false);
  const dispatch = useAppDispatch();
  const item = useAppSelector((state) => selectBasketItemWithId(state, id));
  const addItemToBasket = () => {
    dispatch(addToBasket(props));
  };
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(id));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setPressed((b) => !b);
        }}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed ? "border-b-0" : ""
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{short_description}</Text>
            <Text className="text-gray-400 mt-2">
              ${price}
              {/* <CurrencyFormat quantity={434} currency="GBP" /> */}
            </Text>
          </View>
          <View>
            <Image
              source={{ uri: image }}
              className="h-20 w-20 bg-gray-300 mt-2 border border-gray-300"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center pb-3 space-x-2">
            <TouchableOpacity
              onPress={removeItemFromBasket}
              disabled={!item.length}
            >
              <FontAwesome
                name="minus-circle"
                size={40}
                color={`${item.length > 0 ? "#00ccbb" : "gray"}`}
              />
            </TouchableOpacity>
            <Text>{item.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <FontAwesome name="plus-circle" size={40} color="#00ccbb" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
