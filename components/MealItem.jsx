import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const MealItem = ({ item }) => {
  const navigation = useNavigation();
  const pressMealHandler = () => {
    navigation.navigate("MealDetail", { id: item.id });
  };

  return (
    <View style={styles.item}>
      <Pressable onPress={pressMealHandler}>
        <Text style={styles.title}>{item.title}</Text>
        <Image
          source={{
            uri: item.imageUrl,
          }}
          style={styles.image}
        />
        <View style={styles.info}>
          <View style={styles.infoColumn}>
            <View style={styles.infoBlock}>
              <Icon name="clock" size={28} />
              <Text style={styles.text}>{item.duration} min</Text>
            </View>
            <View style={styles.infoBlock}>
              <Icon name="settings" size={28} />
              <Text style={styles.text}>{item.complexity}</Text>
            </View>
          </View>
          <View style={[styles.infoColumn, styles.infoColumn2]}>
            <View style={styles.infoBlock}>
              <MaterialIcon name="attach-money" size={28} />
              <Text style={styles.text}>{item.affordability}</Text>
            </View>
            <View style={styles.infoBlock}>
              {item.isGlutenFree && (
                <Image
                  style={styles.icon}
                  source={require("../assets/icons/gluten-free.png")}
                />
              )}
              {item.isVegan && (
                <Image
                  style={styles.icon}
                  source={require("../assets/icons/lactose-free.png")}
                />
              )}
              {item.isVegetarian && (
                <Image
                  style={styles.icon}
                  source={require("../assets/icons/no-meat.png")}
                />
              )}
              {item.isLactoseFree && (
                <Image
                  style={styles.icon}
                  source={require("../assets/icons/vegan.png")}
                />
              )}
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  item: {
    marginVertical: 40,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 22,
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  infoBlock: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  infoColumn: {
    gap: 20,
  },
  infoColumn2: {
    alignItems: "center",
  },
  icon: {
    width: 28,
    height: 28,
  },
  text: {
    fontSize: 20,
  },
});
