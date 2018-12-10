import React from "react";
import axios from "axios";
import {
  KeyboardAvoidingView,
  Button,
  View,
  ScrollView,
  ImbirthDate,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import Icono from "react-native-vector-icons/FontAwesome";
import DateTimePickerTester from "../../components/DateTimePickerTester";
import ButtonSex from "../../components/ButtonSex";
export default class StatingProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profil ",
    headerStyle: {
      backgroundColor: "rgb(239,239,244)"
    }
    //header: null //pour enlever le header
  };
  // L'Id est déjà transmis par la birthDate d'avant, pas besoin de le mettre dans les state
  // On recupere l'Id par : this.props.navigation.state.params
  state = {
    firstName: "",
    lastName: "",
    birthDate: new Date(),
    sex: ""
  };

  componentDidMount() {
    console.log("did mount", this.state);
  }

  renderIcon = () => {
    if (
      (this.state.firstName !== "") &
      (this.state.lastName !== "") &
      (this.state.sex !== "") &
      (this.state.birthDate !== new Date())
    ) {
      return (
        <TouchableOpacity
          style={{
            height: 60,
            width: 60,
            marginLeft: 200,
            marginTop: 100,
            borderRadius: 60,
            backgroundColor: "rgb(171,36,100)",
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={this.handleSubmit}
        >
          <Icono name="chevron-right" size={30} color="white" />
        </TouchableOpacity>
      );
    }
  };

  handleSubmit = () => {
    const { navigate } = this.props.navigation;
    const { firstName, lastName, sex, birthDate } = this.state;
    axios
      .post("http://localhost:3000/user/update", {
        _id: this.props.navigation.state.params,
        firstName,
        lastName,
        sex,
        birthDate
      })
      .then(response => {
        if (response) {
          navigate("Transition", {
            _id: response.data._id,
            firstName: response.data.account.firstName
          });
        }
      })
      .catch(err => {
        console.log("erreur", err);
      });
  };

  render() {
    // console.log("this.props.navigation.state.params",
    //   this.props.navigation.state.params)

    return (
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 30,
          flex: 1,
          backgroundColor: "rgb( 239,239,244)"
        }}
      >
        <Text>Prénom</Text>
        <TextInput
          style={{
            fontSize: 20,
            color: "black",
            height: 35,
            backgroundColor: "white",
            marginTop: 10,
            paddingLeft: 6,
            fontSize: 15,
            borderWidth: 1,
            borderColor: "rgb(103,114,129)",
            paddingBottom: 5
          }}
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChangeText={firstName => this.setState({ firstName })}
        />
        <Text style={{ marginTop: 10 }}>Nom</Text>
        <TextInput
          style={{
            fontSize: 20,
            backgroundColor: "white",
            color: "black",
            height: 35,
            fontSize: 15,
            paddingLeft: 6,
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
        <Text style={{ marginTop: 20 }}>Date de naissance</Text>

        <View
          style={{
            height: 35,
            backgroundColor: "white",
            marginTop: 10,
            borderWidth: 1,
            borderColor: "rgb(103,114,129)",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <DateTimePickerTester
            changeDate={birthDate => {
              this.setState({ birthDate });
            }}
            birthDate={this.state.birthDate}
          />
        </View>
        <Text style={{ marginTop: 10 }}>Sexe</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10
          }}
        >
          <ButtonSex
            type="Homme"
            selected={this.state.sex === "homme" ? true : false}
            onPress={() => this.setState({ sex: "homme" })}
          />
          <ButtonSex
            type="Femme"
            selected={this.state.sex === "femme" ? true : false}
            onPress={() => this.setState({ sex: "femme" })}
          />
        </View>

        {this.renderIcon()}
      </View>
    );
  }
}
