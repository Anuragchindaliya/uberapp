import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import Anticons from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation, useNav } from "../../navigation";
import { useAppSelector } from "../app/hook";
import { selectOrigin } from "../features/nav/navSlice";
const data = [
  {
    id: "342",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "343",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
  {
    id: "344",
    title: "Get Job",
    image: "https://links.papareact.com/28w",
    screen: "JobHomeScreen",
  },
];
const NavOptions = () => {
  const navigation = useNav();
  const origin = useAppSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      className="mt-2"
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(item.screen as any);
            }}
            // disabled={!origin}
            className={`p-4 bg-gray-200 mr-2 ${origin ? "" : "opacity-25"}`}
          >
            <View>
              <Image
                style={{ width: 120, height: 120, resizeMode: "contain" }}
                source={{ uri: item.image }}
              />
            </View>
            <Text className="font-semibold text-lg">{item.title}</Text>
            <View className="bg-black rounded-full w-10 p-2 h-10 mt-2">
              <Anticons name="arrowright" size={22} color="white" />
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default NavOptions;
