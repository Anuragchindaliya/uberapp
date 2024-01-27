import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Daum } from "./jobDetailsApi";
import { FontAwesome } from "@expo/vector-icons";

const tabs = ["About", "Qualifications", "Responsibilities", "Benefits"];
const JobTabs = ({ jobData }: { jobData: Daum }) => {
  const [activeJob, setActiveJob] = useState(tabs[0]);

  return (
    <View className="mt-7 flex px-4">
      <FlatList
        horizontal
        data={tabs}
        renderItem={({ item }) => {
          const isActive = activeJob === item;
          return (
            <TouchableOpacity
              className={`px-4 py-2  rounded-md ${
                isActive ? "bg-purple-900" : "bg-gray-200"
              }`}
              onPress={() => {
                setActiveJob(item);
              }}
            >
              <Text className={`${isActive ? "text-white" : ""}`}>{item}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: 10 }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="h-[70vh] py-2"
      >
        <JobTabDetails activeJob={activeJob} jobData={jobData} />
        {/* <Text>{jobData?.job_highlights.Qualifications}</Text> */}
      </ScrollView>
    </View>
  );
};
const JobTabDetails = ({
  activeJob,
  jobData,
}: {
  activeJob: string;
  jobData: Daum;
}) => {
  if (activeJob === tabs[0]) {
    return (
      <View>
        <Text>{jobData.job_description}</Text>
      </View>
    );
  } else if (activeJob === tabs[1]) {
    return (
      <View>
        <Text>{jobData.job_highlights.Qualifications}</Text>
      </View>
    );
  } else if (activeJob === tabs[2]) {
    return (
      <View>
        <Text>{jobData.job_highlights.Responsibilities}</Text>
      </View>
    );
  } else if (activeJob === tabs[3]) {
    return (
      <View>
        <Text>{jobData.job_highlights.Benefits}</Text>
      </View>
    );
  }
};

export default JobTabs;
