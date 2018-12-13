import React from "react";
import axios from "axios";
import {
  KeyboardAvoidingView,
  AsyncStorage,
  Image,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput
} from "react-native";

export default class LogIn extends React.Component {
  static navigationOptions = {
    title: "Connexion",
    headerStyle: {
      backgroundColor: "rgb(239,239,244)"
    }
    //header: null //pour enlever le header
  };

  state = {
    email: "Jp@msn.com",
    password: "jp",
    isAuthenticated: false
  };
  forgetSubmit = () => {
    const { navigate } = this.props.navigation;
    navigate("ForgotPassword");
  };
  handleSubmit = () => {
    const { navigate } = this.props.navigation;

    axios
      .post("http://localhost:3000/log_in", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        // console.log("response****", response.data);
        // AsyncStorage.setItem("userToken", JSON.stringify(response.data));
        // this.props.navigation.navigate("Main", { _id: response.data._id });

        if (response) {
          AsyncStorage.setItem(
            "userInformation",
            JSON.stringify(response.data),
            () => {
              navigate("Main", { _id: response.data._id });
            }
          );
        }
      })
      .catch(err => {
        console.log("erreur", err);
        alert("Mauvais identifiant ou mauvais mot de passe");
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
          type="email-address"
          autoCapitalize="none"
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
          <Text>SE CONNECTER</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 15 }}>
          <Button
            title="Mot de passe oublié ?"
            color="#841584"
            onPress={this.forgetSubmit}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
