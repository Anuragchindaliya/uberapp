import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import PlacesAutocomplete from "../features/PlacesAutocomplete/PlacesAutocomplete";
import { useDispatch } from "react-redux";
import { setDestination } from "../features/nav/navSlice";
import { useNavigation } from "@react-navigation/native";
import { RideStackList } from "../screen/MapScreen";
import NavFavourites from "./NavFavourites";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<RideStackList>();
  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-2 text-xl">Good Morning, Sonny</Text>
      <View className="border-t border-gray-200 flex-shrink p-5">
        <PlacesAutocomplete
          onPress={(item) => {
            dispatch(
              setDestination({
                latitude: item.latitude,
                longitude: item.longitude,
                value: item.value,
                subtext: item.subtext,
                data_id: item.data_id,
              })
            );
            navigation.navigate("RideOptionsCard");
          }}
        />
        <NavFavourites />
      </View>
      <View className="flex-row m-auto space-x-8">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("RideOptionsCard");
          }}
          className="bg-gray-800 px-4 py-3  rounded-full flex-row space-x-2 items-center"
        >
          <FontAwesome name="car" size={16} color="white" />
          <Text className="text-white">Rides</Text>
        </TouchableOpacity>
        <View className=" px-4 py-3  rounded-full flex-row space-x-2 items-center">
          <Ionicons name="fast-food" size={16} color="black" />
          <Text>Eats</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

// const toInputBoxStyles = StyleSheet.create({
//   contaner: {
//     backgroundColor: "white",
//     paddingTop: 20,
//     flex: 0,
//   },
//   textInput: {
//     backgroundColor: "#DDDDDF",
//     borderRadius: 0,
//     fontSize: 18,
//   },
//   textInputContainer: {
//     paddingHorizontal: 20,
//     paddingBottom: 0,
//   },
// });

export default NavigateCard;
