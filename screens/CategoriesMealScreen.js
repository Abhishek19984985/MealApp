import React from "react";

import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoriesMealScreen = (props) => {
  const catId = props.navigation.getParam("CategoryId");
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};
CategoriesMealScreen.navigationOptions = (navdata) => {
  const catId = navdata.navigation.getParam("CategoryId");
  const selectedCategory = CATEGORIES.find((cat) => catId === cat.id);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoriesMealScreen;
