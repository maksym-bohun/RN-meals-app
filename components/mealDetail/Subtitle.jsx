import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({ subtitle }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{subtitle}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 6,
  },
});
