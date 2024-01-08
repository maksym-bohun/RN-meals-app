import React from "react";
import { StyleSheet, Text, View } from "react-native";

const List = ({ item }) => {
  return item.map((value) => (
    <View style={styles.listItem} key={value}>
      <Text style={styles.itemText}>{value}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
