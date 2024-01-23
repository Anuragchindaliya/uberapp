import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
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
