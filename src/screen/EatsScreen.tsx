import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { RootStackParamList, useNav } from "../../navigation";
import { NativeStackScreenProps } from "../../global";
import { FontAwesome } from "@expo/vector-icons";
import Categories from "../features/categories/Categories";
import FeaturedRow from "../features/featuredRow/FeaturedRow";
type Props = NativeStackScreenProps<RootStackParamList, "EatsScreen">;

const EatsScreen = ({ navigation }: Props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="pt-10 bg-white">
      {/* header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="w-7 h-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="mr-auto">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <FontAwesome name="chevron-down" size={24} color="#00ccbb" />
          </Text>
        </View>
        <FontAwesome name="user-o" size={24} color="#00CCBB" />
      </View>

      {/* search */}
      <View className="flex-row items-center space-x-2 pb-2 px-4">
        <View className="flex-row space-x-2  bg-gray-200 p-3 flex-1 items-center">
          <FontAwesome name="search" size={18} color="gray" />
          <TextInput placeholder="Restaurant and cuisines" />
        </View>
        {/* adjustment icon */}
        <FontAwesome name="filter" size={24} color="#00ccbb" />
      </View>
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 140,
        }}
      >
        {/* categories */}
        <Categories />
        {/* features */}
        <FeaturedRow title="Featured" desc="Best food from our restaurant" />
        <FeaturedRow
          title="Tasty Discounts"
          desc="Everyone enjoying these food"
        />
        <FeaturedRow
          title="Offers near you!"
          desc="Why not support local restaurant"
        />
        {/* <FeaturedRow />
        <FeaturedRow /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default EatsScreen;
