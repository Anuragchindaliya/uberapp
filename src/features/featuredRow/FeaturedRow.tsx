import { View, Text, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "./RestaurantCard";
type Props = {
  title: string;
  desc: string;
};
const FeaturedRow = (props: Props) => {
  const { title, desc } = props;
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <AntDesign name="arrowright" size={24} color="#00ccbb" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{desc}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* restaurant card */}
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Shushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a test description"
          dishes={[
            {
              id: 1,
              name: "Pizza",
              short_description: "pizza description",
              price: 434,
              image: "https://links.papareact.com/gn7",
            },
            {
              id: 2,
              name: "Burger",
              short_description: "Burger description",
              price: 734,
              image: "https://links.papareact.com/gn7",
            },
          ]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Nando's "
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="KFC"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
