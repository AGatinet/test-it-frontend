import React from "react";
import axios from "axios";
import {
  Alert,
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  AsyncStorage
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BackGroundImage from "../../components/BackGroundImage";
export default class FirstMainScreen extends React.Component {
  constructor() {
    super();
    this.getUserToken();
  }

  // Fetch the token from storage then navigate to our appropriate place
  getUserToken() {
    AsyncStorage.getItem("userInformation").then(userInformation => {
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      // this.props.navigation.navigate(userInformation ? "App" : "Auth");
      if (JSON.parse(userInformation)) {
        this.props.navigation.navigate("Main");
      }
    });
  }

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
          permissions: [
            "public_profile",
            "email",
            "user_birthday",
            "user_gender"
          ]
        }
      );
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture,birthday,gender`
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
            lastName: jsonResponse.name,
            photo: jsonResponse.picture.data.url,
            sex: jsonResponse.gender,
            birthDate: jsonResponse.birthday
          })
          .then(response => {
            console.log("response****", response.data);

            if (response) {
              AsyncStorage.setItem(
                "userInformation",
                JSON.stringify(response.data),
                () => {
                  navigate("Transition", {
                    firstName: response.data.account.firstName
                  });
                }
              );
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
              marginTop: 100,
              marginRight: 30
            }}
            source={require("../../assets/images/testit-logo.png")}
          />
          <Text
            style={{
              textAlign: "center",
              marginTop: 10,
              fontSize: 30,
              padding: 20,
              color: "#444444",
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.6
            }}
          >
            TEST IT
          </Text>
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
              flexDirection: "row",
              marginTop: 80,
              borderColor: "#ddd",
              shadowColor: "#000000",
              shadowOffset: { width: 5, height: 5 },
              shadowOpacity: 0.4
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
            style={{
              ...styles.conexion,
              backgroundColor: "white",
              borderColor: "#ddd",
              shadowColor: "#000000",
              shadowOffset: { width: 5, height: 5 },
              shadowOpacity: 0.4
            }}
          >
            <Text style={styles.text}>SE CONNECTER VIA</Text>
            <Text style={styles.text}>EMAIL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("SignUp", { name: "Nouveau compte" })}
            style={{
              ...styles.conexion,
              backgroundColor: "white",
              height: 40,
              borderColor: "#ddd",
              shadowColor: "#000000",
              shadowOffset: { width: 5, height: 5 },
              shadowOpacity: 0.4
            }}
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
