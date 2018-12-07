import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BackGroundImage from "../../components/BackGroundImage";
export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: "TEST-IT",
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <BackGroundImage style={{ flex: 1, width: "100%" }}>
          <Image
            style={{
              height: 160,
              width: 160,
              alignSelf: "center",
              marginTop: 30,
              marginRight: 30
            }}
            source={require("../../assets/images/testit-logo.png")}
          />
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              fontWeight: "600",
              padding: 10
            }}
          >
            Gagne de l'argent en donnant ton avis
          </Text>
          <TouchableOpacity
            style={{
              ...styles.conexion,
              flexDirection: "row"
            }}
          >
            <Icon
              name="facebook-square"
              size={30}
              color="white"
              style={{ paddingRight: 15 }}
            />
            <View>
              <Text style={styles.text}>SE CONNECTER AVEC </Text>
              <Text style={styles.text}>FACEBOOK </Text>
            </View>
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
            style={{ ...styles.conexion, backgroundColor: "white", height: 40 }}
          >
            <Text style={styles.text}>CRÉER UN COMPTE</Text>
          </TouchableOpacity>
        </BackGroundImage>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center"
  },
  conexion: {
    paddingLeft: 28,
    paddingRight: 28,
    width: 250,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 20,
    backgroundColor: "#4267B2",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    alignSelf: "center"
  },
  text: {
    fontSize: 13,
    fontWeight: "700"
  }
});
