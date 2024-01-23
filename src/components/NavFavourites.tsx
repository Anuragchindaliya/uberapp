import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
const navFav = [
  {
    id: "1",
    location: "Home",
    icon: "home",
    destination: "Faridabad, India",
  },
  {
    id: "2",
    location: "Home",
    icon: "briefcase",
    destination: "Gurgaon, India",
  },
];
const NavFavourites = () => {
  return (
    <FlatList
      data={navFav}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => {
        return <View className="bg-gray-300 h-[1px]" />;
      }}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity className="flex-row py-3 items-center">
            <View className="bg-gray-200 p-3 mr-4 rounded-full">
              <Ionicons name={item.icon as any} size={24} color="black" />
            </View>
            <View>
              <Text>{item.location}</Text>
              <Text className="text-gray-400">{item.destination}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default NavFavourites;
