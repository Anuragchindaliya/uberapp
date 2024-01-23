import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator
    >
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title=" first 1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title=" first 2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title=" first 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title=" first 4" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title=" first 5" />
    </ScrollView>
  );
};

export default Categories;
