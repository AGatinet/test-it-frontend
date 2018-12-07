import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: "TEST-IT",
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Gagne de l'argent en donnant ton avis</Text>
        <TouchableOpacity style={styles.conexion}>
          <Text style={styles.text}>SE CONNECTER AVEC </Text>
          <Text style={styles.text}>FACEBOOK </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("LogIn", { name: "Connexion" })}
          style={{ ...styles.conexion, backgroundColor: "white" }}
        >
          <Text style={styles.text}>SE CONNECTER VIA</Text>
          <Text style={styles.text}>EMAIL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("SignUp", { name: "Nouveau compte" })}
          style={{ ...styles.conexion, backgroundColor: "white" }}
        >
          <Text style={styles.text}>CRÉER UN COMPTE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center"
  },
  conexion: {
    paddingLeft: 28,
    paddingRight: 28,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 20,
    backgroundColor: "#4267B2",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    alignSelf: "center"
  },
  text: {
    fontSize: 13,
    fontWeight: "700"
  }
});
