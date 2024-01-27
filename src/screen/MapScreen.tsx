import { View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../features/RideOptionsCard/RideOptionsCard";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../features/nav/navSlice";
import { NavigationProp } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { useNav } from "../../navigation";

export type RideStackParamList = {
  NavigateCard: undefined;
  RideOptionsCard: undefined;
};
export type RideStackList = NavigationProp<RideStackParamList>;
const MapScreen = () => {
  const Stack = createStackNavigator<RideStackParamList>();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapView = useRef<MapView>();
  const navigation = useNav();
  console.log({ origin });
  useEffect(() => {
    if (!origin || !destination) return;
    // @ts-ignore
    mapView.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: {
        top: 50,
        left: 50,
        right: 50,
        bottom: 50,
      },
    });
  }, [origin, destination]);
  return (
    <View className="relative">
      <View className="z-50  absolute top-16 left-6 ">
        <TouchableOpacity
          className="bg-gray-100 p-3 rounded-full"
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          <MaterialIcons name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View className="h-1/2 -z-30">
        <MapView
          ref={mapView}
          className="flex-1"
          mapType="mutedStandard"
          initialRegion={{
            latitude: origin?.latitude,
            longitude: origin?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {origin?.latitude && origin?.longitude && (
            <Marker
              key={origin?.data_id + 1}
              coordinate={{
                latitude: origin?.latitude,
                longitude: origin?.longitude,
              }}
              title={origin?.value}
              description={origin?.subtext}
              identifier="origin"
            />
          )}
          {destination?.latitude && destination?.longitude && (
            <Marker
              key={destination?.data_id + 2}
              coordinate={{
                latitude: destination?.latitude,
                longitude: destination?.longitude,
              }}
              title={destination?.value}
              description={destination?.subtext}
              identifier="destination"
            />
          )}

          {/* <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_API_KEY}
            strokeWidth={3}
            strokeColor="black"
          /> */}
        </MapView>
      </View>

      <View className="h-1/2">
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
