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
  Annonces: {
    screen: AnnoncesScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#041A39"
      },
      title: "Annonces",
      headerTitleStyle: {
        color: "white",
        fontSize: 22
      }
    }
  }
});

Annonces.navigationOptions = {
  tabBarLabel: "Annonces",
  tabBarOptions: {
    activeTintColor: "#041A39",
    inactiveTintColor: "#ACB9CC"
  },
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"home"} />
};

const Profil = createStackNavigator({
  Profil: {
    screen: ProfilScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#041A39"
      },
      title: "Mon profil",
      headerTitleStyle: {
        color: "white",
        fontSize: 22
      }
    }
  }
});

Profil.navigationOptions = {
  tabBarLabel: "Profil",
  tabBarOptions: {
    activeTintColor: "#041A39",
    inactiveTintColor: "#ACB9CC"
  },
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"user"} />
};

const MesOffres = createStackNavigator({
  MesOffres: MesOffresScreen
});

MesOffres.navigationOptions = {
  tabBarLabel: "Mes offres",
  tabBarOptions: {
    activeTintColor: "#041A39",
    inactiveTintColor: "#ACB9CC"
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"dollar, usd"} />
  )
};

const SettingsStack = createStackNavigator({
  Settings: ReglagesScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Réglages",
  tabBarOptions: {
    activeTintColor: "#041A39",
    inactiveTintColor: "#ACB9CC"
  },
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"cog"} />
};

export default createBottomTabNavigator({
  Profil,
  Annonces,

  MesOffres,
  SettingsStack
});
