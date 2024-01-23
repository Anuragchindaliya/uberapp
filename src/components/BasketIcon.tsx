import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNav } from "../../navigation";
import { useAppSelector } from "../app/hook";
import {
  selectBasketItem,
  selectBasketTotal,
} from "../features/featuredRow/basketSlice";

const BasketIcon = () => {
  const navigation = useNav();
  const items = useAppSelector(selectBasketItem);
  const total = useAppSelector(selectBasketTotal);

  return (
    <View className="absolute  bottom-10 w-full z-50">
      <TouchableOpacity
        className="mx-5 bg-[#00ccbb] p-4 rounded-lg space-x-1 items-center flex-row"
        onPress={() => {
          navigation.navigate("BasketScreen");
        }}
      >
        <Text className="text-white font-extrabold py-1 px-2 bg-[#01A296]">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-center text-lg">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">${total}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
