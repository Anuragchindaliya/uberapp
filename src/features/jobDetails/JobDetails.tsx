import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useState } from "react";
import { useGetJobDetailsQuery } from "./jobDetailsApi";
import { EvilIcons } from "@expo/vector-icons";
import JobTabs from "./JobTabs";
import { FontAwesome } from "@expo/vector-icons";

const JobDetails = () => {
  const { isLoading, data } = useGetJobDetailsQuery({
    job_id: "we",
    extended_publisher_details: false,
  });
  const [isLiked, setLiked] = useState(false);
  const jobData = data?.data?.[0];
  if (isLoading) {
    return (
      <View className="h-full justify-center">
        <ActivityIndicator size={30} />
      </View>
    );
  }
  return (
    <View>
      {/* {jobData?.employer_logo && ( */}
      <Image
        source={{ uri: jobData?.employer_logo }}
        className="w-20 h-20 border"
      />
      {/* )} */}
      <Text className="font-semibold text-center">{jobData?.job_title}</Text>
      <View className="flex-row justify-center">
        <Text className=" text-center">{jobData?.employer_name} |</Text>
        <EvilIcons name="location" size={22} color="black" />
        <Text className=" text-center">{jobData?.job_country}</Text>
      </View>
      {jobData && <JobTabs jobData={jobData} />}
      <View className="absolute w-full flex-row space-x-3 bottom-6 bg-white p-3">
        <TouchableOpacity
          className="border border-gray-400 p-3 rounded-xl"
          onPress={() => {
            setLiked((b) => !b);
          }}
        >
          <FontAwesome
            name={isLiked ? "heart" : "heart-o"}
            size={24}
            color={isLiked ? "red" : "gray"}
            className="opacity-10"
          />
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-orange-600/80 flex-1 p-3 rounded-xl"
          onPress={() => {
            Linking.openURL(
              jobData.job_google_link ?? "http://career.google.com/jobs/results"
            );
          }}
        >
          <Text className="text-white text-lg text-center">Apply for jobs</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobDetails;
