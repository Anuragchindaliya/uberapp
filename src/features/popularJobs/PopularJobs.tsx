import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { useGetJobsQuery } from "./popularJobsApi";
import { checkImageURL } from "../../utils";
import { useNav } from "../../../navigation";

const PopularJobs = () => {
  const navigation = useNav();
  const { isLoading, data, isError, error } = useGetJobsQuery({
    num_pages: 12,
    page: 2,
    query: "sefsd",
  });
  return (
    <View>
      <View className="flex-row mt-4">
        <Text className="flex-1 text-lg font-semibold">Popular jobs</Text>
        <TouchableOpacity>
          <Text>Show all</Text>
        </TouchableOpacity>
      </View>

      <View>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={"gray"} />
        ) : isError ? (
          <Text>{error?.toString?.()} Some went wrong</Text>
        ) : (
          <FlatList
            data={data?.data || []}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="mb-3 bg-white p-4 rounded-md shadow-md"
                onPress={() => {
                  navigation.navigate("JobDetailsScreen");
                }}
              >
                <Image
                  style={{
                    resizeMode: "contain",
                  }}
                  source={{
                    uri: checkImageURL(item.employer_logo)
                      ? item.employer_logo
                      : "https://www.freepik.com/free-vector/hand-colorful-gradient-style-vector-design_57346850.htm#page=69&query=placeholder%20logo%20white&position=46&from_view=keyword&track=ais&uuid=ee35cd3b-ff33-47ad-abe7-f3822756ed4c",
                  }}
                  className="w-10 h-10 object-contain"
                />
                <Text
                  className="font-semibold flex-1"
                  // numberOfLines={1}
                >
                  {item.employer_name}
                </Text>
                <Text>{item.job_title}</Text>
                <Text>{item.job_country}</Text>
              </TouchableOpacity>
            )}
            // keyExtractor={item=>item}
            contentContainerStyle={{ columnGap: 20 }}
            horizontal
          />
        )}
      </View>
      <View className="flex-row mt-4">
        <Text className="flex-1 text-lg font-semibold">Nearby jobs</Text>
        <TouchableOpacity>
          <Text>Show all</Text>
        </TouchableOpacity>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={"gray"} />
        ) : error ? (
          <Text>Some went wrong</Text>
        ) : (
          <View>
            {data.data.map((item) => {
              return (
                <TouchableOpacity
                  key={item.job_id}
                  className="flex-row mb-3 bg-white p-4 rounded-md shadow-md"
                >
                  <Image
                    source={{ uri: item.employer_logo }}
                    className="w-20 h-20 object-contain"
                  />
                  <View className="p-3">
                    <Text className="font-semibold  truncate">
                      {item.job_title}
                    </Text>
                    <Text className="text-xs">{item.job_employment_type}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
            {/* //   <FlatList
        //     data={data?.data || []}
        //     renderItem={({ item }) => (
        //       <TouchableOpacity className="mb-3 bg-white p-4 rounded-md">
        //         <Image
        //           source={{ uri: item.employer_logo }}
        //           className="w-20 h-20 object-contain"
        //         />
        //         <Text className="font-semibold">{item.employer_name}</Text>
        //         <Text>{item.job_title}</Text>
        //         <Text>{item.job_country}</Text>
        //       </TouchableOpacity>
        //     )}
        //     // keyExtractor={item=>item}
        //     contentContainerStyle={{ columnGap: 20 }}
        //     // horizontal
        //   /> */}
          </View>
        )}
      </View>
    </View>
  );
};

export default PopularJobs;
