import { View, Text, SafeAreaView, Platform, StatusBar } from "react-native";
import React from "react";

const BasketScreen = () => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View>
        <Text className="text-lg font-bold text-center">Basket</Text>
        <Text className="text-center text-gray-400">Nando</Text>
      </View>
      <Text>BasketScreen</Text>
    </SafeAreaView>
  );
};

export default BasketScreen;
