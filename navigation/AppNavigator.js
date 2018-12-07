import React from "react";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import AuthStack from "./AuthStack";
import Profil from "../screens/Profil/Profil";
// import HousingListContainer from "./src/containers/HousingList";

export default createSwitchNavigator({
  Main: MainTabNavigator,
  Auth: AuthStack
});
