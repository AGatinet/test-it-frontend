import { createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import AuthStack from "./AuthStack";
import AnnoncesDetails from "../screens/Annonces/AnnoncesDetails";
import GPS from "../screens/Annonces/GPS";

export default createSwitchNavigator({
  Main: MainTabNavigator,

  Auth: AuthStack,
  AnnoncesDetails: AnnoncesDetails,
  GPS: GPS

});
