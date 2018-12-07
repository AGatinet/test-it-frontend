import React from "react";
import axios from "axios";
import {
  KeyboardAvoidingView,
  Button,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";

// pierre@msn.com
//  pierre

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: "Inscription",
    headerStyle: {
      backgroundColor: "rgb(239,239,244)"
    }
    //header: null //pour enlever le header
  };

  state = {
    email: "jo@msn.com",
    password: "jo"
  };

  handleSubmit = () => {
    const { navigate } = this.props.navigation;

    axios
      .post("http://localhost:3000/sign_up", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        if (response) {
          navigate("StartingProfile", { _id: response.data._id });
          //J'envoie l'Id sur l'écran startingProfile
        }
      })
      .catch(err => {
        console.log("erreur", err);
        alert("Email déjà utilisé. Veuillez donner un email valable.");
      });
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={{
          backgroundColor: "rgb(239,239,244)",
          alignItems: "center",

          flex: 1,
          justifyContent: "center"
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
          type="text"
          name="email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
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
          placeholder="........"
          placeholderTextColor="lightgrey"
          secureTextEntry
          type="text"
          name="password"
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
        <TouchableOpacity
          style={{
            height: 40,
            width: 190,
            borderRadius: 20,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
            alignSelf: "center"
          }}
          onPress={this.handleSubmit}
        >
          <Text>CRÉER MON COMPTE</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
