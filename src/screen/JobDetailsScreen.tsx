import { Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import JobDetails from "../features/jobDetails/JobDetails";
import { useNav } from "../../navigation";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const JobDetailsScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#eaeaea",
      },
      headerShadowVisible: false,
      headerLeft: () => (
        <TouchableOpacity className="p-2" onPress={navigation.goBack}>
          {/* <MaterialIcons name="menu" size={24} color="black" /> */}
          <AntDesign name="arrowleft" size={24} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity className="p-2 pr-4">
          {/* <FontAwesome name="user-circle" size={24} color="black" /> */}
          <MaterialIcons name="share" size={24} color="black" />
        </TouchableOpacity>
      ),
      headerTitle: "",
    });
  });
  return (
    <SafeAreaView className="">
      <JobDetails />
    </SafeAreaView>
  );
};

export default JobDetailsScreen;
