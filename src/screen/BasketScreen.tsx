import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../app/hook";
import {
  removeFromBasket,
  selectBasketItem,
  selectBasketTotal,
  selectRestauranName,
} from "../features/featuredRow/basketSlice";
import { DishType } from "../features/featuredRow/RestaurantCard";
import { useNav } from "../../navigation";

const BasketScreen = () => {
  const navigation = useNav();
  const restaurantName = useAppSelector(selectRestauranName);
  const items = useAppSelector(selectBasketItem);
  const dispatch = useAppDispatch();
  const total = useAppSelector(selectBasketTotal);
  const groupItems = useMemo(() => {
    return items.reduce((result, item) => {
      (result[item.id] = result[item.id] || []).push(item);
      return result;
    }, {});
  }, [items]);
  console.log({ groupItems });
  return (
    <SafeAreaView
      className="bg-white flex-1"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View className="flex-1 bg-gray-200">
        <View className="p-5 bg-white border-b border-gray-300 shadow-sm">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">{restaurantName}</Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className=" rounded-full bg-gray-100 absolute right-5 top-3"
          >
            <FontAwesome name="times-circle" size={40} color="#00ccbb" />
          </TouchableOpacity>
        </View>
        <View className="flex-row w-full items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            className="h-7 w-7 p-4 rounded-full"
            source={{ uri: "https://links.papareact.com/wru" }}
          />
          <Text className="flex-1">Deliver in 50-70 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00ccbb]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {Object.entries(groupItems).map(([key, item]: [any, DishType[]]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00ccbb]">{item.length} x</Text>
              <Image
                source={{ uri: item[0]?.image }}
                className="w-12 h-12 rounded-full"
              />
              <Text className="flex-1">{item[0]?.name}</Text>
              <Text className="text-gray-600">${item[0]?.price}</Text>
              <TouchableOpacity className="text-xs text-[#00ccbb]">
                <Text
                  onPress={() => {
                    dispatch(removeFromBasket(+key));
                  }}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">{total}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">$5.99</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Order Total</Text>
            <Text className="text-gray-400">${total + 5.99}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PrepareOrderScreen");
            }}
            className="bg-[#00ccbb] rounded-lg p-4"
          >
            <Text className="text-white text-center text-lg font-bold">
              Place order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
