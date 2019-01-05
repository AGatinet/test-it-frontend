import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import AnnoncesScreen from "../screens/Annonces/Annonces";
import AnnoncesDetailsScreen from "../screens/Annonces/AnnoncesDetails";
import ProfilScreen from "../screens/Profil/Profil";
import MesOffresScreen from "../screens/Mesoffres/MesOffres";
import ReglagesScreen from "../screens/Reglages/Reglages";
import BankAccountScreen from "../screens/Reglages/Bank";
import ContactUsScreen from "../screens/Reglages/Contact";
import IbanFormScreen from "../screens/Reglages/IbanForm";
import TypeForm from "../screens/Annonces/TypeForm";

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

TypeForm.navigationOptions = {
  tabBarLabel: "Sondage",
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
  Reglages: ReglagesScreen,
  BankAccount: BankAccountScreen,
  ContactUs: ContactUsScreen,
  IbanForm: IbanFormScreen
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
  Annonces,
  MesOffres,
  Profil,
  SettingsStack
});
