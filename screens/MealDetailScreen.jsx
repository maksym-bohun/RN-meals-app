import { useRoute } from "@react-navigation/native";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/mealDetail/Subtitle";
import List from "../components/mealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.id;

  const favoritesMealsCtx = useContext(FavoritesContext);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoritesMealsCtx.ids.includes(mealId);
  const { addFavorite, removeFavorite } = favoritesMealsCtx;

  const headerButtonPressedHander = () => {
    if (mealIsFavorite) {
      removeFavorite(mealId);
    } else addFavorite(mealId);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color={"#fff"}
            onPress={headerButtonPressedHander}
          />
        );
      },
    });
  }, [mealIsFavorite]);

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails item={selectedMeal} textStyle={styles.text} />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle subtitle="Ingredients" />
          <List item={selectedMeal.ingredients} />
          <Subtitle subtitle="Steps" />
          <List item={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    objectFit: "cover",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#fff",
  },
  text: { color: "#fff" },
  screen: {
    marginBottom: 30,
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
