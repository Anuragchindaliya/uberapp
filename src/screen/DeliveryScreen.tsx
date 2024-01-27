import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNav } from "../../navigation";
import { useAppSelector } from "../app/hook";
import { selectRestauranName } from "../features/featuredRow/basketSlice";
import { FontAwesome } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import MapView from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNav();
  const restaurantName = useAppSelector(selectRestauranName);
  return (
    <View className="bg-[#00ccbb] flex-1">
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
        // className="flex-1"
      >
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity
            onPress={navigation.goBack}
            className=" rounded-full  items-center "
          >
            <FontAwesome name="times" size={30} color="white" />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className=" bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row">
            <View>
              <Text className="text-lg text-gray-400">Eastimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              className="h-20 w-20"
              source={{ uri: "https://links.papareact.com/fls" }}
            />
          </View>
          <Progress.Bar
            // size={30}
            color="#00ccbb"
            indeterminate={true}
          />
          <Text className="mt-3 text-gray-500">
            Your order at {restaurantName} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 28.433333,
          longitude: 77.316667,
          longitudeDelta: 0.99,
          latitudeDelta: 0.99,
        }}
        mapType="mutedStandard"
        className="flex-1 -mt-10 z-0"
      ></MapView>
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
          source={{ uri: "https://links.papareact.com/wru" }}
        />
        <View className="flex-1">
          <Text className="text-lg">Sonny Sangha</Text>
          <Text>Your Rider</Text>
        </View>
        <Text className="text-[#00ccbb] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
