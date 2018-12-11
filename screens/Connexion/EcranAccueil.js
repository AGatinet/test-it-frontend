import React from "react";
import axios from "axios";
import {
  Alert,
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BackGroundImage from "../../components/BackGroundImage";
export default class FirstMainScreen extends React.Component {
  static navigationOptions = {
    title: "TEST-IT",
    header: null
  };
  async logInFB() {
    const { navigate } = this.props.navigation;

    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions
      } = await Expo.Facebook.logInWithReadPermissionsAsync(
        "1395611170573031",
        {
          permissions: ["public_profile", "email"]
        }
      );
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`
        );

        const jsonResponse = await response.json();
        console.log("jsonResponse", jsonResponse);
        // Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
        Alert.alert("Connexion réussie.");
        const { navigate } = this.props.navigation;

        axios
          .post("http://localhost:3000/facebook/log_in", {
            email: jsonResponse.email,

            firstName: jsonResponse.name,
            lastName: jsonResponse.name
          })
          .then(response => {
            console.log("response****", response.data);

            if (response) {
              navigate("Transition", {
                _id: response.data._id,
                firstName: response.data.account.firstName
              });
            }
          })
          .catch(err => {
            console.log("erreur", err);
            alert("Mauvais identifiant ou mauvais mot de passe");
          });
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      Alert.alert(`Facebook Login Error: ${message}`);
    }
  }

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
              marginTop: 150,
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
            onPress={() => this.logInFB()}
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
