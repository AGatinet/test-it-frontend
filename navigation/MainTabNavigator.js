import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import AnnoncesScreen from "../screens/Annonces/Annonces";
import ProfilScreen from "../screens/Profil/Profil";
import MesOffresScreen from "../screens/Mesoffres/MesOffres";
import ReglagesScreen from "../screens/Reglages/Reglages";

const Annonces = createStackNavigator({
  Annonces: AnnoncesScreen
});

Annonces.navigationOptions = {
  tabBarLabel: "Annonces",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"home"} />
};

const Profil = createStackNavigator({
  Profil: ProfilScreen
});

Profil.navigationOptions = {
  tabBarLabel: "Profil",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"user"} />
};

const MesOffres = createStackNavigator({
  MesOffres: MesOffresScreen
});

MesOffres.navigationOptions = {
  tabBarLabel: "Mes offres",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"dollar, usd"} />
  )
};

const SettingsStack = createStackNavigator({
  Settings: ReglagesScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Réglages",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"cog"} />
};

export default createBottomTabNavigator({
  Annonces,
  Profil,
  MesOffres,
  SettingsStack
});
