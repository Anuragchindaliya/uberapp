import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import PopularJobs from "../features/popularJobs/PopularJobs";
const JobTypes = ["Full-time", "Part-time", "Contractor"];
const JobHomeScreen = () => {
  const isLoading = true;
  const error = false;
  const [activeJobType, setActiveJobType] = useState<string>(JobTypes[0]);
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: 10,
          }}
        >
          <View>
            <Text className="text-lg">Hello Adrian</Text>
            <Text className="text-2xl">Find a your perfect job</Text>
          </View>
          <View>
            <View className="flex-row items-center my-3">
              <TextInput
                className="bg-gray-100 p-3 mx-1 flex-1 placeholder:text-gray-100"
                placeholder="What are you looking for"
              />
              <TouchableOpacity className="bg-orange-600/70 p-3 rounded-md">
                <FontAwesome name="search" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <FlatList
              data={JobTypes}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setActiveJobType(item);
                    }}
                    className={`border p-1 px-2 rounded-full ${
                      item === activeJobType ? "" : "opacity-20"
                    }`}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item}
              contentContainerStyle={{ columnGap: 10 }}
              horizontal
            />
          </View>
          <PopularJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JobHomeScreen;
