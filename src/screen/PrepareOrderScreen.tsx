import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNav } from "../../navigation";
const PrepareOrderScreen = () => {
  const navigation = useNav();
  useEffect(() => {
    const timeid = setTimeout(() => {
      navigation.navigate("DeliveryScreen");
    }, 4000);
    return () => {
      clearTimeout(timeid);
    };
  }, []);
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="bg-[#00ccbb] flex-1 justify-center items-center"
    >
      <Animatable.Image
        animation="slideInUp"
        iterationCount={1}
        source={require("../assets/orderLoader.gif")}
        // direction="alternate"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        // direction="alternate"
        className="text-lg my-10 text-white font-bold text-center"
      >
        Wating for restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PrepareOrderScreen;
