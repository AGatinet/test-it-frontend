import { createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import AuthStack from "./AuthStack";
import AnnoncesDetails from "../screens/Annonces/AnnoncesDetails";
import GPS from "../screens/Annonces/GPS";
import TypeForm from "../screens/Annonces/TypeForm";

export default createSwitchNavigator({
  Auth: AuthStack,
  Main: MainTabNavigator,
  AnnoncesDetails: AnnoncesDetails,
  GPS: GPS,
  TypeForm: TypeForm
});
