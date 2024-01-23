import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useGetDurationByAddrQuery } from "./RideOptionsApi";
type RideData = {
  id: string;
  title: string;
  multiplier: number;
  image: string;
};
const dataOptions = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];
const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selectedRide, setSelectedRide] = useState<RideData>();
  const { data } = useGetDurationByAddrQuery({
    start_addr: "faridabad",
    end_addr: "gurgaon",
  });
  console.log(
    { data },
    "durationData",
    data?.durations?.[0]?.formatted_duration
  );
  return (
    <SafeAreaView className="bg-white flex-grow">
      <View className="flex-row items-center">
        <TouchableOpacity
          className="p-3"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesome name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-center py-3 text-xl mx-auto">
          Select a Ride - {data?.directions?.[0]?.formatted_distance}
        </Text>
      </View>
      <FlatList
        data={dataOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSelectedRide(item);
              }}
              className={`flex-row justify-between px-10 items-center ${
                item.id === selectedRide?.id && "bg-gray-200"
              }`}
            >
              <Image
                source={{
                  uri: item.image,
                }}
                style={{
                  width: 85,
                  height: 85,
                  resizeMode: "contain",
                }}
              />
              <View>
                <Text className="text-xl font-semibold">{item.title}</Text>
                <Text>Travel time...</Text>
              </View>
              <Text className="text-xl">$99</Text>
            </TouchableOpacity>
          );
        }}
      />
      <View>
        <TouchableOpacity
          disabled={!selectedRide}
          className={`bg-black py-3 m-3 ${!selectedRide && "bg-gray-300"}`}
        >
          <Text className="text-white text-center text-xl">
            Choose {selectedRide?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
