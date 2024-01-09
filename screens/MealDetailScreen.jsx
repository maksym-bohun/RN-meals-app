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
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.id;
  // const favoritesMealsCtx = useContext(FavoritesContext);
  const dispatch = useDispatch();
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  // const mealIsFavorite = favoritesMealsCtx.ids.includes(mealId);
  useEffect(() => {});
  const mealIsFavorite = favoriteMealsIds.includes(mealId);
  console.log(mealIsFavorite);
  // const { addFavorite, removeFavorite } = favoritesMealsCtx;

  const headerButtonPressedHander = () => {
    console.log("mealIsFavorite", mealIsFavorite);
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
      // removeFavorite(mealId);
    } else {
      dispatch(addFavorite({ id: mealId }));
      // addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    console.log("CHANGED");
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
  }, [mealIsFavorite, favoriteMealsIds]);

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
