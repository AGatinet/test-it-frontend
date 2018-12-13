import React from "react";
import axios from "axios";
import {
  KeyboardAvoidingView,
  AsyncStorage,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  AlertIOS
} from "react-native";
export default class ForgotPassword extends React.Component {
  state = {
    email: ""
  };
  handleSubmit = () => {
    const { navigate } = this.props.navigation;

    axios
      .post("http://localhost:3000/log_in/forgot_password", {
        email: this.state.email
      })
      .then(response => {
        if (response) {
          AlertIOS.alert(
            "",
            "Votre nouveau mot de passe vous a été envoyé par mail."
          );
          navigate("LogIn", { name: "Connexion" });
          //J'envoie l'Id sur l'écran startingProfile
        }
      })
      .catch(err => {
        console.log("erreur", err);
        alert("Email déjà utilisé. Veuillez donner un email valable.");
      });
  };

  render() {
    console.log(this.state.email);
    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={{
          backgroundColor: "rgb(239,239,244)",
          alignItems: "center",
          flex: 1
        }}
      >
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
            fontSize: 15,
            color: "black",
            alignSelf: "center",
            marginTop: 30
          }}
        >
          Veuillez entrer votre email :
        </Text>
        <TextInput
          style={{
            fontSize: 20,
            color: "black",
            height: 50,
            width: 200,
            marginTop: 30,
            borderBottomWidth: 1,
            borderBottomColor: "rgb(103,114,129)",
            paddingBottom: 5
          }}
          placeholder="email" //arno@airbnb-api.com
          placeholderTextColor="lightgrey"
          type="email-address"
          autoCapitalize="none"
          name="email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TouchableOpacity
          style={{
            height: 50,
            width: 260,
            borderRadius: 40,
            backgroundColor: "#0DA5BA",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
            alignSelf: "center",
            borderColor: "#ddd",
            shadowColor: "#000000",
            shadowOffset: { width: 3, height: 3 },
            shadowOpacity: 0.4
          }}
          onPress={this.handleSubmit}
        >
          <Text style={{ color: "white", fontWeight: "900" }}>
            Confirmer votre demande
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
