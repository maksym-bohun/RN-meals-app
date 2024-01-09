import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/mealsList/MealsList";

const FavoritesScreen = () => {
  const favoriteMealsCtx = useContext(FavoritesContext);
  // const [favoriteMeals, setFavoriteMeals] = useState([]);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  const content =
    favoriteMeals.length === 0 ? (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No favorite meals!</Text>
      </View>
    ) : (
      <MealsList data={favoriteMeals} />
    );

  return content;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
