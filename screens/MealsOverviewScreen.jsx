import React, { useEffect, useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/mealsList/MealItem";
import MealsList from "../components/mealsList/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;
  const currentMeals = MEALS.filter((meal) =>
    // meal.categoryIds.includes(route.id)
    meal.categoryIds.includes(catId)
  );

  const currentCategory = CATEGORIES.find((category) => category.id === catId);

  useLayoutEffect(() => {
    navigation.setOptions({ title: currentCategory.title });
  }, [catId, navigation]);

  return <MealsList data={currentMeals} />;
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f4f7",
  },
});
