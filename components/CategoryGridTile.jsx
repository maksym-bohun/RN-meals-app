import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

const CategoryGridTile = ({ item, onPress }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={onPress}
        // style={[styles.categoryContainer, { backgroundColor: item.color }]}
        // android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.categoryContainer,
          { backgroundColor: item.color },
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.text}>{item.title}</Text>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    overflow: Platform.select({ ios: "", android: "hidden" }),
  },
  categoryContainer: {
    flex: 1,
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
