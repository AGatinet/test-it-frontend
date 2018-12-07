import React from "react";
import { Image, View, Text, StyleSheet, ScrollView } from "react-native";

export default class MesOffres extends React.Component {
  // Barre de navigation
  static navigationOptions = {
    title: "Mes offres",
    headerStyle: {
      backgroundColor: "#041A39"
    },
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: "bold",
      color: "white"
    }
  };
  // Définition des états
  state = {
    BarrePosition: "BarrePosition0"
  };
  // Render
  render() {
    return (
      <View>
        <View style={styles.navContainer}>
          <View style={styles.itemsContainer}>
            <Text
              style={styles.nav}
              onPress={() => {
                this.setState({
                  BarrePosition: "BarrePosition1"
                });
              }}
            >
              FAVORIS
            </Text>
            <Text
              style={styles.nav}
              onPress={() => {
                this.setState({
                  BarrePosition: "BarrePosition2"
                });
              }}
            >
              EN ATTENTE
            </Text>
            <Text
              style={styles.nav}
              onPress={() => {
                this.setState({
                  BarrePosition: "BarrePosition3"
                });
              }}
            >
              À VENIR
            </Text>
            <Text
              style={styles.navHistorique}
              onPress={() => {
                this.setState({
                  BarrePosition: "BarrePosition4"
                });
              }}
            >
              HISTORIQUE
            </Text>
          </View>
          <View style={styles[this.state.BarrePosition]} />
        </View>
        <ScrollView style={styles.background} />
      </View>
    );
  }
}

// Styles
var styles = StyleSheet.create({
  navContainer: {
    flexDirection: "column",
    height: 45,
    backgroundColor: "#041A39"
  },
  itemsContainer: {
    flexDirection: "row",
    height: 43
  },
  nav: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    width: "25%",
    fontSize: 11,
    height: 43,
    paddingTop: 15
  },
  navHistorique: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    width: "25%",
    paddingRight: 7,
    fontSize: 11,
    height: 43,
    paddingTop: 15
  },
  BarrePosition0: {
    height: 0,
    width: "25%",
    backgroundColor: "white"
  },
  BarrePosition1: {
    height: 2,
    width: "25%",
    backgroundColor: "white",
    marginLeft: "0%"
  },
  BarrePosition2: {
    height: 2,
    width: "25%",
    backgroundColor: "white",
    marginLeft: "25%"
  },
  BarrePosition3: {
    height: 2,
    width: "25%",
    backgroundColor: "white",
    marginLeft: "50%"
  },
  BarrePosition4: {
    height: 2,
    width: "25%",
    backgroundColor: "white",
    marginLeft: "75%"
  },
  background: {
    backgroundColor: "#EFEFF4",
    flex: 1,
    height: 100
  }
});
