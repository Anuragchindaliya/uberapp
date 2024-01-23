import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList, useNav } from "../../navigation";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";

const RestaurantScreen = () => {
  const {
    params: {
      id,
      title,
      imgUrl,
      rating,
      address,
      genre,
      short_description,
      dishes,
    },
  } = useRoute<RouteProp<RootStackParamList, "RestaurantScreen">>();
  const navigation = useNav();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View className="relative">
            <Image
              source={{ uri: imgUrl }}
              className="w-full h-56 bg-gray-300 p-4"
            />
            <TouchableOpacity
              className="bg-white absolute top-14 left-5 p-2 rounded-full"
              onPress={() => {
                navigation.navigate("EatsScreen");
              }}
            >
              <AntDesign name="arrowleft" size={24} color="#00ccbb" />
            </TouchableOpacity>
          </View>
          <View className="bg-white">
            <View className="px-4 pt-4 ">
              <Text className="text-3xl font-bold ">{title}</Text>
              <View className="flex-row items-center space-x-2">
                <View className="flex-row items-center space-x-1">
                  <FontAwesome name="star" size={22} color="green" />
                  <Text className="text-xs text-gray-500">
                    <Text className="text-green-500">{rating}</Text> {genre}
                  </Text>
                </View>
                <View className="flex-row space-x-1 items-center">
                  <EvilIcons name="location" size={22} color="black" />
                  <Text className="text-xs text-gray-500">
                    Nearby {address}
                  </Text>
                </View>
              </View>
              <Text className="mt-1 pb-4 text-gray-500">
                {short_description}
              </Text>
            </View>
            <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
              <FontAwesome name="question-circle-o" size={24} color="black" />
              <Text className="pl-2 flex-1 text-md font-bold">
                Have a food allergy?
              </Text>
              <FontAwesome name="chevron-right" size={22} color="#00ccbb" />
            </TouchableOpacity>
          </View>
          <View className="pb-36">
            <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

            {/* dishes */}
            {dishes.map((data) => {
              return <DishRow {...data} />;
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
      <BasketIcon />
    </>
  );
};

export default RestaurantScreen;
