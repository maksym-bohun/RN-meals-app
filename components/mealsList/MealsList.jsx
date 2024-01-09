import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Import GestureHandlerRootView
import MealItem from "./MealItem";

const MealsList = ({ data }) => {
  const renderMealItem = (itemData) => {
    return <MealItem item={itemData.item} />;
  };

  return (
    <GestureHandlerRootView>
      <View>
        <FlatList
          data={data}
          keyExtractor={(itemData) => itemData.id}
          renderItem={renderMealItem}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default MealsList;
