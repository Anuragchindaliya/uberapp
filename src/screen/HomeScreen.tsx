import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";
import { useDispatch } from "react-redux";
import { setOrigin } from "../features/nav/navSlice";
import PlacesAutocomplete from "../features/PlacesAutocomplete/PlacesAutocomplete";
import { useNav } from "../../navigation";
import NavFavourites from "../components/NavFavourites";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNav();
  return (
    <SafeAreaView>
      <View className="p-5">
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
          }}
        />
        <PlacesAutocomplete
          onPress={(item) => {
            dispatch(
              setOrigin({
                latitude: item.latitude,
                longitude: item.longitude,
                value: item.value,
                subtext: item.subtext,
                data_id: item.data_id,
              })
            );
            navigation.navigate("MapScreen");
          }}
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
