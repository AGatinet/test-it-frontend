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
import DateTimePickerTester from "../../components/DateTimePickerTester";

// pierre@msn.com
//  pierre

export default class StatingProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profil testeur"

    //header: null //pour enlever le header
  };

  state = {
    firstName: "",
    lastName: "",
    age: "",
    sex: ""
  };

  // componentDidMount() {
  //   this.setState({ ...this.props.navigation.state.params });
  // }

  handleSubmit = () => {
    const { navigate } = this.props.navigation;

    axios
      .post("http://localhost:3000/user/update", {
        _id: this.props.navigation.state.params,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        sex: this.state.sex,
        age: this.state.age
      })
      .then(response => {
        //console.log("response****", response.data);

        if (response) {
          navigate("Annonces", { name: "Home" });
        }
      })
      .catch(err => {
        console.log("erreur", err);
        alert("Veuillez compléter tous les champs");
      });
  };

  render() {
    //console.log("mystates", this.state);
    console.log("zidane mec il est chaud", this.props.navigation.state.params);

    return (
      <View style={{ marginLeft: 20, marginRight: 20, marginTop: 30, flex: 1 }}>
        <Text>Prénom</Text>
        <TextInput
          style={{
            fontSize: 20,
            color: "black",
            height: 35,
            backgroundColor: "white",
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
            backgroundColor: "white",
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
            onPress={() => this.setState({ sex: "homme" })}
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
            onPress={() => this.setState({ sex: "Femme" })}
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

        <View
          style={{
            height: 35,
            backgroundColor: "white",
            marginTop: 10,
            borderWidth: 1,
            borderColor: "rgb(103,114,129)",
            paddingBottom: 5,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <DateTimePickerTester
            changeDate={date => {
              const today = new Date();
              this.setState({ age: today.getYear() - date.getYear() });
            }}
          />
        </View>

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
          <Icon name="pencil" size={30} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}
