import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RestaurantCardType } from "./src/features/featuredRow/RestaurantCard";

export type RootStackParamList = {
  HomeScreen: undefined;
  MapScreen: undefined;
  EatsScreen: undefined;
  RestaurantScreen: RestaurantCardType;
  BasketScreen: undefined;
  PrepareOrderScreen: undefined;
  DeliveryScreen: undefined;

  JobHomeScreen: undefined;
  JobDetailsScreen: undefined;
};
export type ScreenNames = ["HomeScreen", "MapScreen"]; // type these manually
// export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
export const useNav = () => {
  return useNavigation<StackNavigation>();
};
