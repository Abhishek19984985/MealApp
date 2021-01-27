import { useLinkProps } from "@react-navigation/native";
import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const CategoryGridTile = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <>
      <View style={styles.gridItem}>
        <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
          <View
            style={{ ...styles.container, ...{ backgroundColor: props.color } }}
          >
            <Text style={styles.title} numberOfLines={2}>
              {props.title}
            </Text>
          </View>
        </TouchableCmp>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowRadius: 10,

    padding: 15,

    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontStyle: "italic",
    fontSize: 20,
  },
});

export default CategoryGridTile;
