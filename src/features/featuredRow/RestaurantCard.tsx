import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useNav } from "../../../navigation";
export type DishType = {
  id: number;
  name: string;
  short_description: string;
  price: number;
  image: string;
};
export type RestaurantCardType = {
  id: number;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: DishType[];
  long: number;
  lat: number;
};
const RestaurantCard = (props: RestaurantCardType) => {
  const { title, genre, rating, address } = props;
  const navigation = useNav();
  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={() => {
        navigation.navigate("RestaurantScreen", props);
      }}
    >
      <Image
        source={{ uri: "https://links.papareact.com/gn7" }}
        className="rounded-sm h-36 w-64"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <FontAwesome name="star" size={22} color="green" />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <EvilIcons name="location" size={22} color="black" />
          <Text className="text-xs text-gray-500"> Nearby {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
