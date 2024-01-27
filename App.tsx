import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Provider } from "react-redux";
import store from "./src/app/store";
import HomeScreen from "./src/screen/HomeScreen";
import MapScreen from "./src/screen/MapScreen";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import EatsScreen from "./src/screen/EatsScreen";
import RestaurantScreen from "./src/screen/RestaurantScreen";
import { RootStackParamList } from "./navigation";
import BasketScreen from "./src/screen/BasketScreen";
import PrepareOrderScreen from "./src/screen/PrepareOrderScreen";
import DeliveryScreen from "./src/screen/DeliveryScreen";
import JobHomeScreen from "./src/screen/JobHomeScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import JobDetailsScreen from "./src/screen/JobDetailsScreen";
const Stack = createStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1"
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EatsScreen"
                component={EatsScreen}
                // options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RestaurantScreen"
                component={RestaurantScreen}
                // options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BasketScreen"
                component={BasketScreen}
                options={{
                  presentation: "modal",
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="PrepareOrderScreen"
                component={PrepareOrderScreen}
                options={{
                  presentation: "modal",
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="DeliveryScreen"
                component={DeliveryScreen}
                options={{
                  presentation: "modal",
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="JobDetailsScreen"
                component={JobDetailsScreen}
                // options={{
                //   presentation: "modal",
                //   headerShown: false,
                // }}
              />
              <Stack.Screen
                name="JobHomeScreen"
                component={JobHomeScreen}
                options={{
                  headerStyle: {
                    backgroundColor: "#eaeaea",
                  },
                  headerShadowVisible: false,
                  headerLeft: () => (
                    <TouchableOpacity className="p-2">
                      <MaterialIcons name="menu" size={24} color="black" />
                    </TouchableOpacity>
                  ),
                  headerRight: () => (
                    <TouchableOpacity className="p-2 pr-4">
                      <FontAwesome name="user-circle" size={24} color="black" />
                    </TouchableOpacity>
                  ),
                  headerTitle: "",
                }}
                // options={{
                //   headerShown: false,
                // }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
