import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Suggestion, useGetPlaceByNameMutation } from "./placesApi";
import { debounce } from "../../utils";
// const data = [
//   {
//     title: "London",
//   },
//   {
//     title: "Boston",
//   },
// ];

type PlacesAutocompleteProps = { onPress: (item: Suggestion) => void };
const PlacesAutocomplete = ({ onPress }: PlacesAutocompleteProps) => {
  const [getPlace, { isLoading, data }] = useGetPlaceByNameMutation();
  console.log("res", { data });
  const onChange = (text: string) => {
    console.log({ text });
    if (text.length > 2) {
      getPlace(text);
    }
  };
  const debounceOnChange = React.useCallback(debounce(onChange, 400), []);

  return (
    <>
      <TextInput
        className="border border-gray-400  px-2"
        placeholder="From where?"
        onChangeText={(text) => debounceOnChange(text)}
      />
      <FlatList
        data={data?.suggestions || []}
        renderItem={({ item }) => {
          return (
            <Pressable
              className="p-1 border-b border-gray-100 flex-row truncate"
              onPress={() => onPress(item)}
            >
              <PlaceIcon type={item.type} />
              <View>
                <Text>{item.value}</Text>
                <Text className="text-gray-400">{item.subtext}</Text>
              </View>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.data_id}
      />
    </>
  );
};

const PlaceIcon = ({ type }: { type: string }) => {
  if (type === "place") {
    return <MaterialIcons name="place" size={24} color="black" />;
  } else {
    return <EvilIcons name="search" size={24} color="black" />;
  }
};

export default PlacesAutocomplete;
