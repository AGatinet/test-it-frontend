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
import Icon from "react-native-vector-icons/FontAwesome";

// pierre@msn.com
//  pierre

export default class StatingProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profil testeur"
    //header: null //pour enlever le header
  };

  state = {
    email: "",
    password: "",
    isAuthenticated: false
  };

  handleSubmit = () => {
    const { navigate } = this.props.navigation;

    axios
      .post("http://localhost:3000/log_in", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        sex: this.state.sex,
        age: this.state.age
      })
      .then(response => {
        console.log("response****", response.data);

        if (response) {
          navigate("Home", { name: "Home" });
        }
      })
      .catch(err => {
        console.log("erreur", err);
        alert("Veuillez compléter tous les champs");
      });
  };

  render() {
    return (
      <View style={{ marginLeft: 20, marginRight: 20, flex: 1 }}>
        <Text>Prénom</Text>
        <TextInput
          style={{
            fontSize: 20,
            color: "black",
            height: 35,

            marginTop: 10,
            borderWidth: 1,
            borderColor: "rgb(103,114,129)",
            paddingBottom: 5
          }}
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChangeText={firstName => this.setState({ firstName })}
        />
        <Text>Nom</Text>
        <TextInput
          style={{
            fontSize: 20,
            color: "black",
            height: 35,

            marginTop: 10,
            borderWidth: 1,
            borderColor: "rgb(103,114,129)",
            paddingBottom: 5
          }}
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChangeText={lastName => this.setState({ lastName })}
        />
        <Text style={{ marginTop: 10 }}>Sexe</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10
          }}
        >
          <TouchableOpacity
            style={{
              height: 40,
              width: 135,
              marginRight: 10,
              borderRadius: 2,
              backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center"
            }}
            name="sex"
            value="homme"
            onPress={sex => this.setState({ sex })}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "800"
              }}
            >
              Homme
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: 135,

              borderRadius: 2,
              backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center"
            }}
            name="sex"
            value="femme"
            onPress={sex => this.setState({ sex })}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "800"
              }}
            >
              Femme
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ marginTop: 20 }}>Date de naissance</Text>
        <TextInput
          style={{
            fontSize: 20,
            color: "black",
            height: 35,
            marginTop: 10,
            borderWidth: 1,
            borderColor: "rgb(103,114,129)",
            paddingBottom: 5
          }}
          type="text"
          name="age"
          value={this.state.age}
          onChangeText={age => this.setState({ age })}
        />
        <TouchableOpacity
          style={{
            height: 40,
            width: 50,

            borderRadius: 50,
            backgroundColor: "pink",
            justifyContent: "center",
            alignItems: "center"
          }}
        />
        <Icon name="rocket" size={30} color="#900" />
      </View>
    );
  }
}
