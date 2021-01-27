import React from "react";
import MealList from "../components/MealList";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { useSelector } from "react-redux";

const FavouriteScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  if (favMeals.length == 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <Text> No favorite meals found. Start adding some!</Text>
      </View>
    );
  }
  return <MealList listData={favMeals} navigation={props.navigation} />;
};
FavouriteScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favourites",

    headerTintColor: Colors.primaryColor,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerLeftTintColor: "white",
  };
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavouriteScreen;
