import React from "react";
import { View, Text } from "react-native";
import Navigator from "./navigation/MealNavigator";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import mealsReducer from "./store/reducers/meals";

const rootReducers = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducers);

const Meal = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default Meal;
